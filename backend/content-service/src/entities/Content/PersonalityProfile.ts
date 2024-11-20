import { TableInheritance, Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";

@Entity()
export class PersonalityProfile extends ContentBase {
    @PrimaryColumn()
    id!: string;
    
    @BeforeInsert()
    generateId() {
        if (this.targetEntity) { // if this is an imported blueprint - make the id the same as blueprint id
            this.id = this.blueprint_id
        } else {
            this.id = `${this.id_prefix}_${randomUUID().replace(/-/g, "")}`;
        }
    }
    id_prefix = "PROFILE";

    @Column({ type: "varchar", length: 255 })
    name!: string;

    @Column({ type: "varchar", length: 3 })
    coreType!: string; // Enneagram type with wing as a string.

    @Column("jsonb")
    traits!: {
        name: string;
        probability: number; // Probability of assigning this trait during generation.
    }[];

    @Column("jsonb")
    traumaInfluence!: {
        processed?: {
            name: string;
            probability: number; // Probability of assigning this processed trauma trait.
        }[];
        unresolved?: {
            name: string;
            probability: number; // Probability of assigning this unresolved trauma trait.
        }[];
    };

    @ManyToOne(() => User, { nullable: true })
    user?: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world?: World;
}
