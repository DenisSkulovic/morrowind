export class QueryFilter {
    constructor(
        public field: string,
        public operator: 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'contains' | 'regex',
        public value: string | number | boolean
    ) { }
}