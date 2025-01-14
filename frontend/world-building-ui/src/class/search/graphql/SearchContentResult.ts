export class SearchContentResult {
    entityName!: string;
    items!: any[]; // I cannot use ContentBase, and build the "items" objects in the static build method, because that would trigger validate fields, and I may only have a few of the mandatory fields, the data received will inherently be Partial.

    static validate(body: any): void {
        // Validate mandatory fields
        if (!body.entityName) throw new Error('Entity name is required');
        if (!body.items) throw new Error('Items are required');

        // Validate types
        if (typeof body.entityName !== 'string') throw new Error('Entity name must be a string');
        if (!Array.isArray(body.items)) throw new Error('Items must be an array');
        body.items.forEach((item: any) => {
            if (typeof item !== 'object' || item === null) throw new Error('Items must be an array of objects');
        });
    }

    static build(body: any): SearchContentResult {
        SearchContentResult.validate(body);
        const result = new SearchContentResult();
        result.entityName = body.entityName;
        result.items = body.items;
        return result;
    }
}