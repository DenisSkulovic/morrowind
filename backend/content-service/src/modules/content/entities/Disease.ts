import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Tag } from "./Tag";
import { Character } from "./Character";
import { DiseaseDTO, DiseaseSeverityEnumDTO } from "../../../proto/common";
import { Context } from "../../../types";
import { DiseaseSeverityEnum } from "../../../common/enum/entityEnums";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer } from "../../../serializer";
import { deserializeEnum, serializeEnum } from "../../../common/enum/util";


@Entity()
export class Disease extends TaggableContentBase {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    idPrefix = "DISEASE";

    @Column({ type: "varchar", length: 255 })
    @Serializable()
    name!: string;

    @Column({ type: "text" })
    @Serializable()
    description!: string;

    @Column({ type: "enum", enum: Object.values(DiseaseSeverityEnum) })
    @Serializable({
        serialize: type => serializeEnum(DiseaseSeverityEnum, DiseaseSeverityEnumDTO, type),
        deserialize: type => deserializeEnum(DiseaseSeverityEnumDTO, DiseaseSeverityEnum, type),
    })
    severity!: string;

    @ManyToMany(() => Character, {})
    characters?: Character[];

    @ManyToMany(() => Tag, (tag) => tag.diseases, {})
    @Serializable({ strategy: 'id' })
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true, })
    @Serializable({ strategy: 'id' })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true, })
    @Serializable({ strategy: 'id' })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true, })
    @Serializable({ strategy: 'id' })
    world!: World;

    public toDTO(): DiseaseDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: DiseaseDTO): Disease {
        const disease = new Disease();
        return Serializer.fromDTO(dto, disease);
    }
}
