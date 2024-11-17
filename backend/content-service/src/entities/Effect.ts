import { Column, Entity } from "typeorm";
import { ContentBase } from "./ContentBase";

@Entity()
export class Effect extends ContentBase {
    id_prefix = "EFFECT";

    @Column()
    name: string;

    @Column()
    type: string; // "damage", "healing", "buff", "debuff", "resistance", etc.

    @Column({ nullable: true })
    target: string; // "health", "stamina", "magic", etc.

    @Column({ nullable: true })
    mode: string; // "instant", "gradual", "persistent"

    @Column({ nullable: true })
    element?: string; // "fire", "frost", "poison"
}
