import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { BlueprintSetCombinator, deserializeInstruction, serializeInstruction } from "../../class/blueprint_id_and_prob";
import { CharacterGroupGenInstructionDTO } from "../../proto/common";
import { serializeEnum } from "../../enum/util";
import { CombinatorConditionEnum } from "../../enum/CombinatorConditionEnum";

@Entity()
export class CharacterGroupGenInstruction extends ContentBase {
    @PrimaryColumn()
    id!: string;

    id_prefix = "CHARACTER_GROUP_GEN_INSTRUCTION"

    @Column()
    name!: string

    @Column({ type: "jsonb" })
    set!: BlueprintSetCombinator; // JSON structure for the set, stored as jsonb

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public toDTO(): CharacterGroupGenInstructionDTO {
        return {
            id: this.id,
            blueprintId: this.blueprint_id,
            name: this.name,
            set: {
                name: this.set.name,
                prob: this.set.prob,
                cond: serializeEnum(CombinatorConditionEnum, this.set.cond),
                clazz: this.set.clazz,
                instructions: this.set.items.map(serializeInstruction),
            },
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            targetEntity: this.targetEntity
        };
    }

    public static fromDTO(
        dto: CharacterGroupGenInstructionDTO,
        user: User,
        world: World,
        campaign?: Campaign
    ): CharacterGroupGenInstruction {
        if (!dto.set) throw new Error("did not receive field 'set' on CharacterGroupGenInstructionDTO, but it is mandatory")
        const instruction = new CharacterGroupGenInstruction();
        instruction.id = dto.id;
        instruction.set = BlueprintSetCombinator.build({
            name: dto.set.name,
            prob: dto.set.prob,
            cond: dto.set.cond,
            items: dto.set.instructions.map(deserializeInstruction),
        });
        instruction.user = user;
        instruction.campaign = campaign;
        instruction.world = world;
        instruction.targetEntity = dto.targetEntity
        return instruction;
    }
}
