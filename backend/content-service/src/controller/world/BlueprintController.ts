import { Request, Response } from "express";


export class BlueprintController {

    public static async upsertBlueprints(req: Request, res: Response): Promise<void> {
        try {

        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }
    public static async deleteBlueprints(req: Request, res: Response): Promise<void> {
        try {

        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }
    public static async searchBlueprints(req: Request, res: Response): Promise<void> {
        try {

        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }


}