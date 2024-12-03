import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../../ContentBase";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializer } from "../../../serializer";
import { Serializable } from "../../../decorator/serializable.decorator";
import { serializeSkillAdjustment, deserializeSkillAdjustment, SkillAdjustment } from "../../../class/SkillAdjustment";
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
    @Serializable({ serialize: serializeInstruction, deserialize: i => i ? deserializeInstruction(i) : null })
    gender?: GenerationInstruction

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    faction?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    disease?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    addiction?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    profession?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    race?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    religion?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    personality?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    items?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    itemSets?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    pastExpChild?: GenerationInstruction[]

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    pastExpAdult?: GenerationInstruction[]

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    memoryPools?: GenerationInstruction[]

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: i => i ? deserializeGenerationInstructions(i) : null })
    skillSets?: GenerationInstruction[]

    @Column({ type: "jsonb", nullable: true })
    @Serializable({ serialize: serializeSkillAdjustment, deserialize: i => i ? deserializeSkillAdjustment(i) : null })
    skillAdjustments?: SkillAdjustment

    @ManyToOne(() => User, { nullable: true })
    @Serializable({ strategy: 'id' })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @Serializable({ strategy: 'id' })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @Serializable({ strategy: 'id' })
    world!: World;

    public toDTO(): BackgroundDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: BackgroundDTO): Background {
        const pastExperience = new Background();
        return Serializer.fromDTO(dto, pastExperience);
    }
}