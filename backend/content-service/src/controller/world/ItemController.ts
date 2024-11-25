import { Request, Response } from "express";


export class ItemController {

    public static async generateItems(req: Request, res: Response): Promise<void> {
        try {

        } catch (err: any) {
            res.status(400).json({ error: err.message });

        }
    }
    public static async createItems(req: Request, res: Response): Promise<void> {
        try {

        } catch (err: any) {
            res.status(400).json({ error: err.message });

        }
    }

    public static async destroyItems(req: Request, res: Response): Promise<void> {
        try {

        } catch (err: any) {
            res.status(400).json({ error: err.message });

        }
    }

    public static async mergeItems(req: Request, res: Response): Promise<void> {
        try {

        } catch (err: any) {
            res.status(400).json({ error: err.message });

        }
    }

}