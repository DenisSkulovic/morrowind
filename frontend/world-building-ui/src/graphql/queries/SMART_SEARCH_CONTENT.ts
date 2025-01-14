import { gql } from "@apollo/client";

// for reference, check out SearchContentInput

export const SMART_SEARCH_CONTENT = gql`
    query SearchContent($input: [SearchContentInput!]!) {
        searchContent(input: $input) {
            entityName
            items {
                id
                blueprintId
                targetEntity
                ... on Character {
                    firstName
                    lastName
                }
                ... on Item {
                    name
                }
                ... on Skill {
                    name
                }
                ... on Trait {
                    name
                }
                ... on Addiction {
                    name
                }
                ... on Background {
                    name
                }
                ... on Birthsign {
                    name
                }
                ... on CharacterProfession {
                    name
                }
                ... on Disease {
                    name
                }
                ... on Religion {
                    name
                }
                ... on Resistance {
                    name
                }
                ... on Status {
                    name
                }
                ... on Tag {
                    name
                }
            }
        }
    }
`;

export class SmartSearchResponse {
    entityName!: string;
    items!: (
        { id: string, firstName: string, lastName: string } |
        { id: string, name: string }
    )[];

    static validate(data: any): void {
        if (!data.entityName) throw new Error('Entity name is required');
        if (!data.items) throw new Error('Items are required');
        if (!Array.isArray(data.items)) throw new Error('Items must be an array');
        data.items.forEach((item: any) => {
            if (!item.id || !item.name) throw new Error('Item must have an id and name');
        });
    }

    static build(data: any): SmartSearchResponse {
        SmartSearchResponse.validate(data);
        const response = new SmartSearchResponse();
        response.entityName = data.entityName;
        response.items = data.items.map((item: any) => {
            if (item.firstName && item.lastName) {
                return {
                    id: item.id,
                    firstName: item.firstName,
                    lastName: item.lastName
                }
            }
            return {
                id: item.id,
                name: item.name
            }
        });
        return response;
    }
}