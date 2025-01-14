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
export class ItemWeapon extends ItemRepairable {
    idPrefix = "ITEM_WEAPON";

    @Column({ type: "varchar", nullable: true })
    @Serializable()
    @GQLField()
    damageSlash?: string;

    @Column({ type: "varchar", nullable: true })
    @Serializable()
    @GQLField()
    damagePierce?: string;

    @Column({ type: "varchar", nullable: true })
    @Serializable()
    @GQLField()
    damageBlunt?: string;

    @Column({ nullable: true })
    @Serializable()
    @GQLField()
    range?: number; // Range in meters

    @Column({ default: false })
    @Serializable()
    @GQLField()
    twoHanded!: boolean; // Whether the weapon requires two hands.

}
