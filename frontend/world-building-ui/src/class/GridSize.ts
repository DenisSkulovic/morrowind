export class GridSize {
    width!: number;
    height!: number;
}

export function serializeGrid(grid: GridSize): number[] {
    return [grid["width"], grid["height"]];
}
export function deserializeGrid(grid: number[]): GridSize {
    if (grid.length !== 2) throw new Error("Invalid grid array length. Expected [rows, columns], i.e. length of 2.");
    return { width: grid[0], height: grid[1] };
}