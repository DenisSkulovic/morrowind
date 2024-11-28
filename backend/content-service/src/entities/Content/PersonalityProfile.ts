import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { GenerationInstruction } from "../../types";
import { serializeInstruction, deserializeInstruction } from "../../class/blueprint_id_and_prob";
import { PersonalityProfileDTO } from "../../proto/common";


@Entity()
export class PersonalityProfile extends ContentBase {
    @PrimaryColumn()
    id!: string;
    
    id_prefix = "PROFILE";

    @Column({ type: "varchar", length: 255 })
    name!: string;

    @Column({ type: "varchar", length: 3 })
    enneagramType!: string; // Enneagram type with wing as a string.

    @Column("jsonb")
    traits!: GenerationInstruction[];

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public toDTO(): PersonalityProfileDTO {
        return {
            id: this.id,
            blueprintId: this.blueprint_id,
            name: this.name,
            enneagramType: this.enneagramType,
            traits: this.traits.map(serializeInstruction),
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            targetEntity: this.targetEntity
        };
    }

    public static fromDTO(dto: PersonalityProfileDTO, user: User, world: World, campaign?: Campaign): PersonalityProfile {
        const profile = new PersonalityProfile();
        profile.id = dto.id;
        profile.name = dto.name;
        profile.enneagramType = dto.enneagramType;
        profile.traits = dto.traits.map(deserializeInstruction);
        profile.user = user;
        profile.campaign = campaign;
        profile.world = world;
        profile.targetEntity = dto.targetEntity
        return profile;
    }
}
