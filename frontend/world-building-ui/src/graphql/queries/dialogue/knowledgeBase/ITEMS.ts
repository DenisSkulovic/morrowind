import { gql } from "@apollo/client";
import { EntityEnum } from "../../../../enum/EntityEnum";

export const SEARCH_ITEMS = gql`
    query SearchContent($input: [SearchContentInput!]!) {
        searchContent(input: $input) {
            entityName
            items {
                id
                blueprintId
                name
                description
                targetEntity
                ... on ItemRepairable {
                    repairable
                    durability
                    maxDurability
                }
                ... on ItemWeapon {
                    damageSlash
                    damagePierce
                    damageBlunt
                    range
                    twoHanded
                }
                ... on ItemWearable {
                    armorClass
                    durability
                    maxDurability
                    stealthDisadvantage
                }
                ... on ItemFood {
                    nutrition
                    spoilage
                }
                ... on ItemDrinkable {
                    drinkable
                }
                ... on ItemWater {
                    thirstQuenched
                }
                ... on ItemEdible {
                    edible
                }
                ... on ItemConsumable {
                    consumable
                }
                ... on ItemArrow {
                    damagePierce
                }
            }
        }
    }
`;

export class SearchItemsResponse {
    entityName!: string;
    items!: {
        id: string;
        name: string;
        description?: string;
        armorClass?: number;
        durability?: number;
        maxDurability?: number;
        stealthDisadvantage?: boolean;
        damageSlash?: string;
        damagePierce?: string;
        damageBlunt?: string;
        range?: number;
        twoHanded?: boolean;
        repairable?: boolean;
        nutrition?: number;
        spoilage?: number;
        drinkable?: boolean;
        thirstQuenched?: boolean;
        edible?: boolean;
        consumable?: boolean;
    }[];

    static validate(data: any): void {
        if (!data.entityName) throw new Error('Entity name is required');
        if (!Object.values(EntityEnum).includes(data.entityName)) throw new Error('Entity name is not valid');
        if (!data.items || !Array.isArray(data.items)) throw new Error('Items must be a non-empty array');
        data.items.forEach((item: any) => {
            if (!item.id || !item.name) throw new Error('Each item must have an id and name');
        });
    }

    static build(data: any): SearchItemsResponse {
        this.validate(data);
        const response = new SearchItemsResponse();
        response.entityName = data.entityName;
        response.items = data.items.map((item: any) => ({
            id: item.id,
            name: item.name,
            description: item.description,
            armorClass: item.armorClass,
            durability: item.durability,
            maxDurability: item.maxDurability,
            stealthDisadvantage: item.stealthDisadvantage,
            damageSlash: item.damageSlash,
            damagePierce: item.damagePierce,
            damageBlunt: item.damageBlunt,
            range: item.range,
            twoHanded: item.twoHanded,
            repairable: item.repairable,
            nutrition: item.nutrition,
            spoilage: item.spoilage,
            drinkable: item.drinkable,
            thirstQuenched: item.thirstQuenched,
            edible: item.edible,
            consumable: item.consumable
        }));
        return response;
    }
}
