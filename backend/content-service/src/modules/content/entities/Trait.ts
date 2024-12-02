import { Entity, Column, ManyToMany, ManyToOne, TableInheritance, PrimaryColumn } from "typeorm";
import { TaggableContentBase } from "../../../TaggableContentBase";
import { Tag } from "./Tag";
import { TraitDTO, TraitTypeEnumDTO } from "../../../proto/common";
import { Context } from "../../../types";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializer } from "../../../serializer";
import { Serializable } from "../../../decorator/serializable.decorator";
import { TraitTypeEnum } from "../../../common/enum/TraitTypeEnum";
import { deserializeEnum, serializeEnum } from "../../../common/enum/util";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Trait extends TaggableContentBase {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    id_prefix = "TRAIT";

    @Column({ default: "PLACEHOLDER" })
    @Serializable()
    name!: string;

    @Column({ type: "enum", enum: TraitTypeEnum })
    @Serializable({
        serialize: (i) => serializeEnum(TraitTypeEnumDTO, i),
        deserialize: (i) => deserializeEnum(TraitTypeEnum, i)
    })
    type!: TraitTypeEnum

    @ManyToMany(() => Tag, (tag) => tag.traits, {})
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

    public toDTO(): TraitDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: TraitDTO): Trait {
        const trait = new Trait();
        return Serializer.fromDTO(dto, trait);
    }
}
