import { Serializable } from "../../decorator/serializable.decorator";



export class SortBy {
    @Serializable()
    public field!: string;

    @Serializable()
    public direction!: 'asc' | 'desc';

    constructor(field: string, direction: 'asc' | 'desc') {
        this.field = field;
        this.direction = direction;
    }
}