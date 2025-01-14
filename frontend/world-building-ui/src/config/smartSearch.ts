import { SearchFilterInput } from "../class/search/graphql/SearchFilterInput";
import { QueryFilterOperatorEnum } from "../enum/QueryFilterOperatorEnum";
import { EntityEnum } from "../enum/EntityEnum";

type Filter = {
    field: string;
    operator: QueryFilterOperatorEnum;
}
type ItemToSearch = {
    entityName: EntityEnum;
    resultsPerPage: number;
    filters: Filter[];
}

export type SmartSearchConfig = {
    itemsToSearch: ItemToSearch[];
}

export const smartSearchConfig: SmartSearchConfig = {
    itemsToSearch: [
        {
            entityName: EntityEnum.Character,
            resultsPerPage: 10,
            filters: [
                {
                    field: "firstName",
                    operator: QueryFilterOperatorEnum.CONTAINS,
                },
                {
                    field: "lastName",
                    operator: QueryFilterOperatorEnum.CONTAINS,
                },
            ],
        },
        {
            entityName: EntityEnum.Item,
            resultsPerPage: 10,
            filters: [
                {
                    field: "name",
                    operator: QueryFilterOperatorEnum.CONTAINS,
                },
            ],
        },
        {
            entityName: EntityEnum.Skill,
            resultsPerPage: 10,
            filters: [
                {
                    field: "name",
                    operator: QueryFilterOperatorEnum.CONTAINS,
                },
            ],
        },
        {
            entityName: EntityEnum.Trait,
            resultsPerPage: 10,
            filters: [
                {
                    field: "name",
                    operator: QueryFilterOperatorEnum.CONTAINS,
                },
            ],
        },
        {
            entityName: EntityEnum.Addiction,
            resultsPerPage: 10,
            filters: [
                {
                    field: "name",
                    operator: QueryFilterOperatorEnum.CONTAINS,
                },
            ],
        },
        {
            entityName: EntityEnum.Background,
            resultsPerPage: 10,
            filters: [
                {
                    field: "name",
                    operator: QueryFilterOperatorEnum.CONTAINS,
                },
            ],
        },
        {
            entityName: EntityEnum.Birthsign,
            resultsPerPage: 10,
            filters: [
                {
                    field: "name",
                    operator: QueryFilterOperatorEnum.CONTAINS,
                },
            ],
        },
        {
            entityName: EntityEnum.CharacterProfession,
            resultsPerPage: 10,
            filters: [
                {
                    field: "name",
                    operator: QueryFilterOperatorEnum.CONTAINS,
                },
            ],
        },
        {
            entityName: EntityEnum.Disease,
            resultsPerPage: 10,
            filters: [
                {
                    field: "name",
                    operator: QueryFilterOperatorEnum.CONTAINS,
                },
            ],
        },
        {
            entityName: EntityEnum.Religion,
            resultsPerPage: 10,
            filters: [
                {
                    field: "name",
                    operator: QueryFilterOperatorEnum.CONTAINS,
                },
            ],
        },
        {
            entityName: EntityEnum.Resistance,
            resultsPerPage: 10,
            filters: [
                {
                    field: "name",
                    operator: QueryFilterOperatorEnum.CONTAINS,
                },
            ],
        },
        {
            entityName: EntityEnum.Status,
            resultsPerPage: 10,
            filters: [
                {
                    field: "name",
                    operator: QueryFilterOperatorEnum.CONTAINS,
                },
            ],
        },
        {
            entityName: EntityEnum.Tag,
            resultsPerPage: 10,
            filters: [
                {
                    field: "name",
                    operator: QueryFilterOperatorEnum.CONTAINS,
                },
            ],
        },
    ]
}