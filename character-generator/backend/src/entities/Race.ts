import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
class Race {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: Record<string, string>; // Localized names

    @Column("jsonb")
    traits: string[]; // Visual or cultural traits

    @Column("jsonb")
    bonuses: Record<string, number | Record<string, number>>; // Resistances, skill bonuses, etc.

    @Column({ nullable: true })
    houseAffiliation: string; // Optional FK to House entity
}
