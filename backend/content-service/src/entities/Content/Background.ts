import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { Context, GenerationInstruction } from "../../types";
import { BackgroundCustomizationDTO, BackgroundDTO } from "../../proto/common";
import { serializeGenerationInstructions, deserializeGenerationInstructions } from "../../class/blueprint_id_and_prob";


@Entity()
export class Background extends ContentBase {
    @PrimaryColumn()
    id!: string;

    id_prefix = "BACKGROUND";

    @Column({ type: "varchar", length: 255 })
    name!: string; // Name of the background (e.g., "Highland Town Guard")

    @Column({ type: "jsonb", nullable: true })
    faction?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    disease?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    addiction?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    profession?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    race!: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    religion?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    personality!: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    items?: GenerationInstruction[];

    @Column({ type: "jsonb", nullable: true })
    past_exp_child?: GenerationInstruction[]

    @Column({ type: "jsonb", nullable: true })
    past_exp_adult?: GenerationInstruction[]

    @Column({ type: "jsonb", nullable: true })
    memory_pools?: GenerationInstruction[]

    @Column({ type: "jsonb", nullable: true })
    skill_sets?: GenerationInstruction[]

    @Column({ type: "jsonb", nullable: true })
    skill_adjustments?: { [skill_blueprint_id: string]: number }

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public static toDTO(bck: Background): BackgroundDTO {
        return {
            id: bck.id,
            name: bck.name,
            faction: bck.faction && serializeGenerationInstructions(bck.faction),
            disease: bck.disease && serializeGenerationInstructions(bck.disease),
            addiction: bck.addiction && serializeGenerationInstructions(bck.addiction),
            profession: bck.profession && serializeGenerationInstructions(bck.profession),
            race: serializeGenerationInstructions(bck.race),
            religion: bck.religion && serializeGenerationInstructions(bck.religion),
            personality: serializeGenerationInstructions(bck.personality),
            items: bck.items && serializeGenerationInstructions(bck.items),
            pastExpChild: bck.past_exp_child && serializeGenerationInstructions(bck.past_exp_child),
            pastExpAdult: bck.past_exp_adult && serializeGenerationInstructions(bck.past_exp_adult),
            memoryPools: bck.memory_pools && serializeGenerationInstructions(bck.memory_pools),
            skillSets: bck.skill_sets && serializeGenerationInstructions(bck.skill_sets),
            skillAdjustments: bck.skill_adjustments || {},
            user: Background.serializeEntity(bck.user, i => User.toDTO(i)),
            campaign: Background.serializeEntity(bck.campaign, i => Campaign.toDTO(i)),
            world: Background.serializeEntity(bck.world, i => World.toDTO(i)),
            targetEntity: bck.targetEntity
        };
    }

    public static fromDTO(dto: BackgroundDTO, context: Context): Background {
        if (!dto.race) throw new Error("race cannot be undefined on BackgroundDTO")
        if (!dto.personality) throw new Error("personality cannot be undefined on BackgroundDTO")
        const background = new Background();
        background.id = dto.id;
        background.name = dto.name;
        background.faction = dto.faction && deserializeGenerationInstructions(dto.faction);
        background.disease = dto.disease && deserializeGenerationInstructions(dto.disease);
        background.addiction = dto.addiction && deserializeGenerationInstructions(dto.addiction);
        background.profession = dto.profession && deserializeGenerationInstructions(dto.profession);
        background.race = deserializeGenerationInstructions(dto.race);
        background.religion = dto.religion && deserializeGenerationInstructions(dto.religion);
        background.personality = deserializeGenerationInstructions(dto.personality);
        background.items = dto.items && deserializeGenerationInstructions(dto.items);
        background.past_exp_child = dto.pastExpChild && deserializeGenerationInstructions(dto.pastExpChild);
        background.past_exp_adult = dto.pastExpAdult && deserializeGenerationInstructions(dto.pastExpAdult);
        background.memory_pools = dto.memoryPools && deserializeGenerationInstructions(dto.memoryPools);
        background.skill_sets = dto.skillSets && deserializeGenerationInstructions(dto.skillSets);
        background.skill_adjustments = dto.skillAdjustments || {};
        background.user = context.user;
        background.campaign = context.campaign;
        background.world = context.world;
        background.targetEntity = dto.targetEntity
        return background;
    }
}


export class BackgroundCustomization {
    faction?: GenerationInstruction[];
    disease?: GenerationInstruction[];
    addiction?: GenerationInstruction[];
    profession?: GenerationInstruction[];
    race?: GenerationInstruction[];
    religion?: GenerationInstruction[];
    personality?: GenerationInstruction[];
    items?: GenerationInstruction[];
    past_exp_child?: GenerationInstruction[];
    past_exp_adult?: GenerationInstruction[];
    memory_pools?: GenerationInstruction[];
    skill_sets?: GenerationInstruction[];
    skill_adjustments?: { [skill_blueprint_id: string]: number };

    // Serialization method to convert into DTO
    public static toDTO(bcgCust: BackgroundCustomization): BackgroundCustomizationDTO {
        return {
            faction: bcgCust.faction && serializeGenerationInstructions(bcgCust.faction),
            disease: bcgCust.disease && serializeGenerationInstructions(bcgCust.disease),
            addiction: bcgCust.addiction && serializeGenerationInstructions(bcgCust.addiction),
            profession: bcgCust.profession && serializeGenerationInstructions(bcgCust.profession),
            race: bcgCust.race && serializeGenerationInstructions(bcgCust.race),
            religion: bcgCust.religion && serializeGenerationInstructions(bcgCust.religion),
            personality: bcgCust.personality && serializeGenerationInstructions(bcgCust.personality),
            items: bcgCust.items && serializeGenerationInstructions(bcgCust.items),
            pastExpChild: bcgCust.past_exp_child && serializeGenerationInstructions(bcgCust.past_exp_child),
            pastExpAdult: bcgCust.past_exp_adult && serializeGenerationInstructions(bcgCust.past_exp_adult),
            // memoryPools: bcgCust.memory_pools && serializeGenerationInstructions(bcgCust.memory_pools),
            skillSets: bcgCust.skill_sets && serializeGenerationInstructions(bcgCust.skill_sets),
            skillAdjustments: bcgCust.skill_adjustments && { skillAdjustments: bcgCust.skill_adjustments },
        };
    }

    // Deserialization method to convert from DTO
    public static fromDTO(dto: BackgroundCustomizationDTO): BackgroundCustomization {
        const customization = new BackgroundCustomization();
        customization.faction = dto.faction && deserializeGenerationInstructions(dto.faction);
        customization.disease = dto.disease && deserializeGenerationInstructions(dto.disease);
        customization.addiction = dto.addiction && deserializeGenerationInstructions(dto.addiction);
        customization.profession = dto.profession && deserializeGenerationInstructions(dto.profession);
        customization.race = dto.race && deserializeGenerationInstructions(dto.race);
        customization.religion = dto.religion && deserializeGenerationInstructions(dto.religion);
        customization.personality = dto.personality && deserializeGenerationInstructions(dto.personality);
        customization.items = dto.items && deserializeGenerationInstructions(dto.items);
        customization.past_exp_child = dto.pastExpChild && deserializeGenerationInstructions(dto.pastExpChild);
        customization.past_exp_adult = dto.pastExpAdult && deserializeGenerationInstructions(dto.pastExpAdult);
        // customization.memory_pools = dto.memoryPools && deserializeGenerationInstructions(dto.memoryPools);
        customization.skill_sets = dto.skillSets && deserializeGenerationInstructions(dto.skillSets);
        customization.skill_adjustments = dto.skillAdjustments?.skillAdjustments;
        return customization;
    }
}
