import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { Character } from "./Character";
import { ManyToMany } from "typeorm";
import { AddictionDTO } from "../../proto/common";
import { Context } from "../../types";

@Entity()
export class Addiction extends ContentBase {
    @PrimaryColumn()
    id!: string;

    id_prefix = "ADDICTION"

    @Column()
    name!: string

    @ManyToMany(() => Character, {})
    characters!: Character[];

    @ManyToOne(() => User, { nullable: true, })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true, })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true, })
    world!: World;

    public static toDTO(addiction: Addiction): AddictionDTO {
        return {
            id: addiction.id,
            blueprintId: addiction.blueprint_id,
            name: addiction.name,
            characters: Addiction.serializeEntityArray(addiction.characters, i => Character.toDTO(i)),
            user: Addiction.serializeEntity(addiction.user, i => User.toDTO(i)),
            campaign: Addiction.serializeEntity(addiction.campaign, i => Campaign.toDTO(i)),
            world: Addiction.serializeEntity(addiction.world, i => World.toDTO(i)),
            targetEntity: addiction.targetEntity
        };
    }

    public static fromDTO(dto: AddictionDTO, context: Context): Addiction {
        const addiction = new Addiction();
        addiction.id = dto.id;
        addiction.characters = Addiction.deserializeEntityArray(dto.characters, i => Character.fromDTO(i, context));
        addiction.user = context.user;
        addiction.campaign = context.campaign;
        addiction.world = context.world;
        addiction.targetEntity = dto.targetEntity
        return addiction;
    }
}