import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { BlueprintSetCombinator, deserializeInstruction, serializeInstruction } from "../../class/blueprint_id_and_prob";
import { CharacterGroupGenInstructionDTO, ConditionEnumDTO } from "../../proto/common";
import { deserializeEnum, serializeEnum } from "../../enum/util";
import { Context } from "../../types"; import { ConditionEnum } from "../../enum/ConditionEnum";

@Entity()
export class CharacterGroupGenInstruction extends ContentBase {
    @PrimaryColumn()
    id!: string;

    id_prefix = "CHARACTER_GROUP_GEN_INSTRUCTION"

    @Column()
    name!: string

    @Column({ type: "jsonb" })
    set!: BlueprintSetCombinator;

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public static toDTO(charGrpGen: CharacterGroupGenInstruction): CharacterGroupGenInstructionDTO {
        return {
            id: charGrpGen.id,
            blueprintId: charGrpGen.blueprint_id,
            name: charGrpGen.name,
            set: {
                name: charGrpGen.set.name,
                prob: charGrpGen.set.prob,
                cond: serializeEnum(ConditionEnum, charGrpGen.set.cond),
                clazz: charGrpGen.set.clazz,
                instructions: charGrpGen.set.items.map(serializeInstruction),
            },
            user: CharacterGroupGenInstruction.serializeEntity(charGrpGen.user, i => User.toDTO(i)),
            campaign: CharacterGroupGenInstruction.serializeEntity(charGrpGen.campaign, i => Campaign.toDTO(i)),
            world: CharacterGroupGenInstruction.serializeEntity(charGrpGen.world, i => World.toDTO(i)),
            targetEntity: charGrpGen.targetEntity
        };
    }

    public static fromDTO(
        dto: CharacterGroupGenInstructionDTO,
        context?: Context
    ): CharacterGroupGenInstruction {
        if (!dto.set) throw new Error("did not receive field 'set' on CharacterGroupGenInstructionDTO, but it is mandatory")
        const instruction = new CharacterGroupGenInstruction();
        instruction.id = dto.id;
        instruction.set = BlueprintSetCombinator.build({
            name: dto.set.name,
            prob: dto.set.prob,
            cond: deserializeEnum(ConditionEnumDTO, dto.set.cond),
            items: dto.set.instructions.map(deserializeInstruction),
        });
        if (context) {
            instruction.user = context.user;
            instruction.campaign = context.campaign;
            instruction.world = context.world;
        }
        instruction.targetEntity = dto.targetEntity
        return instruction;
    }
}
