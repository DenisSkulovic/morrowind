import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { TaggableContentBase } from "../../TaggableContentBase";
import { Tag } from "./Tag";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { Character } from "./Character";
import { DiseaseDTO } from "../../proto/common";
import { DiseaseSeverityEnum } from "../../enum/entityEnums";


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

    @ManyToMany(() => Character)
    characters?: Character[];

    @ManyToMany(() => Tag, (tag) => tag.diseases)
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public toDTO(): DiseaseDTO {
        return {
            id: this.id,
            blueprintId: this.blueprint_id,
            name: this.name,
            description: this.description,
            severity: this.severity,
            characters: this.characters
                ? { characters: this.characters.map(character => character.toDTO()) }
                : undefined,
            tags: this.tags ? { tags: this.tags.map(tag => tag.toDTO()) } : undefined,
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            targetEntity: this.targetEntity
        };
    }

    public static fromDTO(dto: DiseaseDTO, user: User, world: World, campaign?: Campaign): Disease {
        const disease = new Disease();
        disease.id = dto.id;
        disease.name = dto.name;
        disease.description = dto.description;
        disease.severity = dto.severity;
        disease.characters = dto.characters?.characters?.map(i=>Character.fromDTO(i, user ,world, campaign)) || [];
        disease.tags = dto.tags?.tags?.map(tag => Tag.fromDTO(tag, user, world, campaign)) || [];
        disease.user = user;
        disease.campaign = campaign;
        disease.world = world;
        disease.targetEntity = dto.targetEntity
        return disease;
    }
}
