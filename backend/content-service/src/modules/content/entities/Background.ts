import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../../ContentBase";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializer, SerializeStrategyEnum } from "../../../serializer";
import { Serializable } from "../../../decorator/serializable.decorator";
import { SkillAdjustment } from "../../../class/SkillAdjustment";
import { GenerationInstruction, deserializeGenerationInstructions, deserializeInstruction, serializeGenerationInstructions, serializeInstruction } from "../../../class/GenerationInstruction";
import { BackgroundDTO } from "../../../proto/common";


@Entity()
export class Background extends ContentBase {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    idPrefix = "BACKGROUND";

    @Column({ type: "varchar", length: 255 })
    @Serializable()
    name!: string; // Name of the background (e.g., "Highland Town Guard")

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeInstruction, deserialize: deserializeInstruction })
    gender?: GenerationInstruction

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    faction?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    disease?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    addiction?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    profession?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    race?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    religion?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    personality?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    items?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    itemSets?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    pastExpChild?: GenerationInstruction[]

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    pastExpAdult?: GenerationInstruction[]

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    memoryPools?: GenerationInstruction[]

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    skillSets?: GenerationInstruction[]

    @Column({ type: "jsonb", nullable: true })
    @Serializable()
    skillAdjustments?: SkillAdjustment

    @ManyToOne(() => User, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    world!: World;

    public toDTO(): BackgroundDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: BackgroundDTO): Background {
        return Serializer.fromDTO(dto, new Background());
    }
}