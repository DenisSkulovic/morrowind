import { QueryFilter } from "./QueryFilter";

export class SearchQuery {
    constructor(
        public page: number,
        public pageSize: number,
        public filters?: QueryFilter[],
        public sortBy?: {
            field: string;
            direction: 'asc' | 'desc';
        },
    ) { }
}