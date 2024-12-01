import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { Context, GenerationInstruction } from "../../types";
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

    public static toDTO(persProfile: PersonalityProfile): PersonalityProfileDTO {
        return {
            id: persProfile.id,
            blueprintId: persProfile.blueprint_id,
            name: persProfile.name,
            enneagramType: persProfile.enneagramType,
            traits: persProfile.traits.map(serializeInstruction),
            user: PersonalityProfile.serializeEntity(persProfile.user, i => User.toDTO(i)),
            campaign: PersonalityProfile.serializeEntity(persProfile.campaign, i => Campaign.toDTO(i)),
            world: PersonalityProfile.serializeEntity(persProfile.world, i => World.toDTO(i)),
            targetEntity: persProfile.targetEntity
        };
    }

    public static fromDTO(dto: PersonalityProfileDTO, context: Context): PersonalityProfile {
        const profile = new PersonalityProfile();
        profile.id = dto.id;
        profile.name = dto.name;
        profile.enneagramType = dto.enneagramType;
        profile.traits = dto.traits.map(deserializeInstruction);
        profile.user = context.user;
        profile.campaign = context.campaign;
        profile.world = context.world;
        profile.targetEntity = dto.targetEntity
        return profile;
    }
}
