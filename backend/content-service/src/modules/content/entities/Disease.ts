import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Tag } from "./Tag";
import { Character } from "./Character";
import { DiseaseDTO, DiseaseSeverityEnumDTO } from "../../../proto/common";
import { DiseaseSeverityEnum } from "../../../common/enum/entityEnums";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer, SerializeStrategyEnum } from "../../../serializer";
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
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: DiseaseSeverityEnum, protoEnum: DiseaseSeverityEnumDTO })
    severity!: string;

    @ManyToMany(() => Character, {})
    characters?: Character[];

    @ManyToMany(() => Tag, (tag) => tag.diseases, {})
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    tags?: Tag[];

    @ManyToOne(() => User, { nullable: true, })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true, })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true, })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    world!: World;

    public toDTO(): DiseaseDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: DiseaseDTO): Disease {
        return Serializer.fromDTO(dto, new Disease());
    }
}
