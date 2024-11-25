import { Request, Response } from "express";


export class CharacterController {

    public static async getCharacters(req: Request, res: Response): Promise<void> {
        try {

        } catch (err: any) {
            res.status(400).json({ error: err.message });

        }
    }
    public static async generateCharacters(req: Request, res: Response): Promise<void> {
        try {

        } catch (err: any) {
            res.status(400).json({ error: err.message });

        }
    }
    public static async createCharacters(req: Request, res: Response): Promise<void> {
        try {

        } catch (err: any) {
            res.status(400).json({ error: err.message });

        }
    }
    public static async updateCharacters(req: Request, res: Response): Promise<void> {
        try {

        } catch (err: any) {
            res.status(400).json({ error: err.message });

        }
    }
    public static async removeCharacters(req: Request, res: Response): Promise<void> {
        try {

        } catch (err: any) {
            res.status(400).json({ error: err.message });

        }
    }
    public static async searchCharacters(req: Request, res: Response): Promise<void> {
        try {

        } catch (err: any) {
            res.status(400).json({ error: err.message });

        }
    }

}