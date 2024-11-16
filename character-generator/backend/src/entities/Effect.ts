import { Tag } from "./Tag";

@Entity()
export class Effect {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: Record<string, string>; // Localized names

    @Column()
    type: string; // Attribute modifier, status modifier, etc.

    @Column("jsonb", { nullable: true })
    targetTags: {
        add?: string[];
        remove?: string[];
    };

    @Column("jsonb", { nullable: true })
    targetAttributes: Record<string, { add?: number; max?: number }>;

    @Column({ default: 0 })
    duration: number; // 0 = instant, >0 = buff/debuff duration in ticks

    @Column({ default: false })
    stackable: boolean;

    @ManyToMany(() => Tag, (tag) => tag.effect)
    tags: Tag[];

}
