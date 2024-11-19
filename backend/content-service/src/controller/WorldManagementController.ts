import { Request, Response } from "express";


export class MemoryController {

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

    public static async upsertBlueprint(req: Request, res: Response): Promise<void> {
        try {

        }
        catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }
    public static async deleteBlueprint(req: Request, res: Response): Promise<void> {
        try {

        }
        catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }
    public static async searchBlueprints(req: Request, res: Response): Promise<void> {
        try {

        }
        catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    public static async generateItemSet(req: Request, res: Response): Promise<void> {
        try {

        } catch (err: any) {
            res.status(400).json({ error: err.message });

        }
    }
    public static async destroyItem(req: Request, res: Response): Promise<void> {
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
    public static async createCharacter(req: Request, res: Response): Promise<void> {
        try {

        } catch (err: any) {
            res.status(400).json({ error: err.message });

        }
    }
    public static async removeCharacter(req: Request, res: Response): Promise<void> {
        try {

        } catch (err: any) {
            res.status(400).json({ error: err.message });

        }
    }

}