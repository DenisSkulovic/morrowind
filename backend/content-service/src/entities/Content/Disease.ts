import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { TaggableContentBase } from "../../TaggableContentBase";
import { Tag } from "./Tag";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { Character } from "./Character";
import { DiseaseDTO } from "../../proto/common";
import { DiseaseSeverityEnum } from "../../enum/entityEnums";
import { Context } from "../../types";


@Entity()
export class Disease extends TaggableContentBase {
    @PrimaryColumn()
    id!: string;

    id_prefix = "DISEASE";

    @Column({ type: "varchar", length: 255 })
    name!: string;

    @Column({ type: "text" })
    description!: string;

    @Column({ type: "enum", enum: Object.values(DiseaseSeverityEnum) })
    severity!: string;

    @ManyToMany(() => Character, {})
    characters?: Character[];

    @ManyToMany(() => Tag, (tag) => tag.diseases, {})
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true, })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true, })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true, })
    world!: World;

    public static toDTO(disease: Disease): DiseaseDTO {
        return {
            id: disease.id,
            blueprintId: disease.blueprint_id,
            name: disease.name,
            description: disease.description,
            severity: disease.severity,
            characters: Disease.serializeEntityArray(disease.characters, i => Character.toDTO(i)),
            tags: Disease.serializeEntityArray(disease.tags, i => Tag.toDTO(i)),
            user: Disease.serializeEntity(disease.user, i => User.toDTO(i)),
            campaign: Disease.serializeEntity(disease.campaign, i => Campaign.toDTO(i)),
            world: Disease.serializeEntity(disease.world, i => World.toDTO(i)),
            targetEntity: disease.targetEntity
        };
    }

    public static fromDTO(dto: DiseaseDTO, context: Context): Disease {
        const disease = new Disease();
        disease.id = dto.id;
        disease.name = dto.name;
        disease.description = dto.description;
        disease.severity = dto.severity;
        disease.characters = Disease.deserializeEntityArray(dto.characters, i => Character.fromDTO(i, context));
        disease.tags = Disease.deserializeEntityArray(dto.tags, i => Tag.fromDTO(i, context));
        disease.user = context.user;
        disease.campaign = context.campaign;
        disease.world = context.world;
        disease.targetEntity = dto.targetEntity
        return disease;
    }
}
