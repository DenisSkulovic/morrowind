import { Request, Response } from "express";


export class AccountController {

    public static async createAccount(req: Request, res: Response): Promise<void> {
        try {
            
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    };


}