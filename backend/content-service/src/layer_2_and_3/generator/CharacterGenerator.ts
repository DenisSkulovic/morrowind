import { WorldDataSource, CampaignDataSource } from "../../data-source";
import { Repository } from "typeorm";
import { ItemInstanceSetService } from "./ItemInstanceSetGenerator";
import { Character } from "../../entities/Content/Character";
import { Background } from "../../entities/Content/Background";
import { Tag } from "../../entities/Content/Tag";
import { ItemSet } from "../../entities/Content/ItemSet";
import { CharacterGenInstruction } from "../../types";

export class CharacterGenerator {
    private worldDataSource = WorldDataSource;
    private campaignDataSource = CampaignDataSource;
    private backgroundRepository: Repository<Background>;
    private tagRepository: Repository<Tag>;
    private characterRepository: Repository<Character>;
    private itemService: ItemInstanceSetService;

    constructor() {
        this.backgroundRepository = this.worldDataSource.getRepository(Background);
        this.tagRepository = this.worldDataSource.getRepository(Tag);
        this.characterRepository = this.campaignDataSource.getRepository(Character);
        this.itemService = new ItemInstanceSetService(this.campaignDataSource);
    }

    public async generateCharacter(instruction: CharacterGenInstruction): Promise<Character> {
        const { first_name, last_name, location, background, background_customization } = instruction;

        // Fetch the background blueprint
        const blueprint = await this.backgroundRepository.findOne({ where: { id: background } });
        if (!blueprint) throw new Error(`Background ${background} not found.`);

        // Apply customizations
        const customizedBackground = this._customizeBackground(blueprint, background_customization);

        // Generate tags (e.g., faction, religion, personality)
        const tags = await this._generateTags(customizedBackground);

        // Generate items from item sets
        const itemSets = customizedBackground.item_set_prob;
        const items = itemSets.flatMap((set) => this.itemService.generateItemsFromSet(set));

        // Create character entity
        const character = this.characterRepository.create({
            first_name,
            last_name,
            location,
            tags,
            items,
            background: customizedBackground.name,
        });

        return character;
    }

    private async _generateTags(customizedBackground: Background): Promise<Tag[]> {
        const tagIds: string[] = [];

        // Add tags based on background probabilities
        const addTags = async (probabilities: Record<string, number>, condition: "OR" | "ANY") => {
            switch (condition) {
                case "OR":
                    const selectedTag = this._chooseRandom(probabilities);
                    if (selectedTag) tagIds.push(selectedTag);
                    break;
                case "ANY":
                    for (const [tagId, prob] of Object.entries(probabilities)) {
                        if (Math.random() <= prob) tagIds.push(tagId);
                    }
                    break;
            }
        };

        // Process each tag probability set
        await Promise.all([
            addTags(customizedBackground.faction_prob.prob, customizedBackground.faction_prob.condition),
            addTags(customizedBackground.religion_prob.prob, customizedBackground.religion_prob.condition),
            addTags(customizedBackground.personality_prob.prob, customizedBackground.personality_prob.condition),
        ]);

        // Fetch tags from the repository
        return this.tagRepository.findByIds(tagIds);
    }

    private _customizeBackground<T>(original: T, customization: BackgroundCustomization): T {
        const customized = { ...original };

        // Replace properties
        if (customization.replace) {
            for (const [key, value] of Object.entries(customization.replace)) {
                customized[key] = value;
            }
        }

        // Add additional properties
        if (customization.add) {
            for (const [key, value] of Object.entries(customization.add)) {
                if (!customized[key]) customized[key] = value;
                else Object.assign(customized[key], value);
            }
        }

        return customized;
    }

    private _chooseRandom<T>(options: Record<string, number>): T | null {
        const totalProb = Object.values(options).reduce((sum, prob) => sum + prob, 0);
        let randomValue = Math.random() * totalProb;

        for (const [key, prob] of Object.entries(options)) {
            randomValue -= prob;
            if (randomValue <= 0) return key as T;
        }

        return null;
    }

    public async saveCharacter(character: Character): Promise<void> {
        await this.characterRepository.save(character);
    }
}
