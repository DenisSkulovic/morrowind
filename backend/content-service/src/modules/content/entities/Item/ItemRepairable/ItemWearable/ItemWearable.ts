import { ChildEntity, Column } from "typeorm";
import { ItemRepairable } from "../ItemRepairable";
import { Serializable } from "../../../../../../decorator/serializable.decorator";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';

@ChildEntity()
@GQLObjectType({ implements: ItemRepairable })
export class ItemWearable extends ItemRepairable {
    idPrefix = "ITEM_WEARABLE"

    @Column({ default: null, nullable: true })
    @GQLField()
    @Serializable()
    armorClass!: number; // AC provided to that body part.

    @Column({ default: 0 })
    @GQLField()
    @Serializable()
    durability!: number;

    @Column({ default: 0 })
    @GQLField()
    @Serializable()
    maxDurability!: number;

    @Column({ nullable: true })
    @GQLField({ nullable: true })
    @Serializable()
    stealthDisadvantage?: boolean; // Whether wearing the armor imposes disadvantage on Stealth checks.

}
