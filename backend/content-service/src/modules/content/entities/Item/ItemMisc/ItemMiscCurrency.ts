import { ChildEntity, Column } from "typeorm";
import { ItemMisc } from "./ItemMisc";
import { Serializable } from "../../../../../decorator/serializable.decorator";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';

@ChildEntity()
@GQLObjectType({ implements: ItemMisc })
export class ItemMiscCurrency extends ItemMisc {
    idPrefix = "ITEM_MISC_CURRENCY"

    @Column({ default: true })
    @Serializable()
    stackable!: boolean;

}