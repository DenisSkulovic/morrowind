import { Request, Response } from "express";


export class WorldController {

    public static async createWorld(req: Request, res: Response): Promise<void> {
        try {

        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    };

    public static async getWorldsForUser(req: Request, res: Response): Promise<void> {
        try {

        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    };

    public static async deleteWorld(req: Request, res: Response): Promise<void> {
        try {

        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    };

    public static async dropWorldContent(req: Request, res: Response): Promise<void> {
        try {

        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    public static async loadWorldPreset(req: Request, res: Response): Promise<void> {
        try {

        }
        catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }


}