import { Serializable } from "../decorator/serializable.decorator";

export class GridSize {
    @Serializable()
    clazz = "GridSize"

    @Serializable()
    width!: number;

    @Serializable()
    height!: number;

    static build(body: Partial<GridSize>): GridSize {
        const grid = new GridSize()
        Object.assign(grid, body)
        return grid
    }
}