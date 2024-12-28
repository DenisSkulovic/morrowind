import { Serializable } from "../decorator/serializable.decorator";

export class GridSize {
    @Serializable()
    width!: number;

    @Serializable()
    height!: number;

    static build(body: any): GridSize {
        const grid = new GridSize()
        Object.assign(grid, body)
        return grid
    }
}
