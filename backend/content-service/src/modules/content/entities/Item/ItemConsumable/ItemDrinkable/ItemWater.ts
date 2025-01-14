import { ChildEntity, Column } from "typeorm";
import { ItemDrinkable } from "./ItemDrinkable";
import { Serializable } from "../../../../../../decorator/serializable.decorator";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';

@ChildEntity()
@GQLObjectType({ implements: ItemDrinkable })
export class ItemWater extends ItemDrinkable {
    idPrefix = "ITEM_WATER";

    @Column({ default: 0 })
    @Serializable()
    @GQLField()
    thirstQuenched!: number; // Amount of thirst satisfied.
}
