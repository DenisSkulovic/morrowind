import { ChildEntity, Column } from "typeorm";
import { ItemConsumable } from "../ItemConsumable";
import { Serializable } from "../../../../../../decorator/serializable.decorator";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';

@ChildEntity()
@GQLObjectType({ implements: ItemConsumable })
export class ItemEdible extends ItemConsumable {
    idPrefix = "ITEM_EDIBLE";

    @Column({ default: true })
    @Serializable()
    @GQLField()
    edible!: boolean;
}
