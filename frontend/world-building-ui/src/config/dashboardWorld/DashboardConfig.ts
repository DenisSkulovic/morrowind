import { EntityEnum } from "../../enum/EntityEnum";
import {
    Inventory2Outlined,
    Person,
    Church,
    Memory,
    Psychology,
    History,
    Work,
    Groups,
    CoronavirusOutlined,
    LocalHospital,
    Science,
    School,
    Backpack,
    Fastfood,
    Healing,
    Diversity3,
    Mood as MoodIcon,
    Favorite,
    Lightbulb,
    Gavel,
    Storefront,
    SentimentSatisfied,
} from '@mui/icons-material';
import { sanitizeEntityName } from "../../utils/sanitizeEntityName";
import { cloneDeep } from "lodash";

export type ContentOverviewConfig = {
    icon: React.ComponentType;
    showInStats: boolean;
    entityName: EntityEnum;
}



export class DashboardConfig {
    private contentOverviewConfig: ContentOverviewConfig[] = contentOverviewConfig;
    private contentOverviewConfigMap: Record<string, ContentOverviewConfig>;

    constructor() {
        // Create map for efficient access
        this.contentOverviewConfigMap = this.contentOverviewConfig.reduce((acc, config) => {
            if (acc[config.entityName]) throw new Error(`Duplicate content overview config found for entity type ${config.entityName}; were you careful enough to edit the config?`);
            acc[config.entityName] = config;
            return acc;
        }, {} as Record<string, ContentOverviewConfig>);
    }

    public getEntityNames(includeAll: boolean = false): EntityEnum[] {
        return this.contentOverviewConfig.filter(config => includeAll || config.showInStats).map(config => config.entityName);
    }

    public getContentOverviewConfig(entityName: string): ContentOverviewConfig {
        const sanitizedEntityName: EntityEnum = sanitizeEntityName(entityName);
        const config = this.contentOverviewConfigMap[sanitizedEntityName];
        if (!config) throw new Error(`No content overview config found for entity type ${entityName}`);
        return cloneDeep(config);
    }

    public getContentOverviewConfigAsArray(): ContentOverviewConfig[] {
        return cloneDeep(this.contentOverviewConfig);
    }

    public getContentOverviewConfigAsMap(): Record<string, ContentOverviewConfig> {
        return cloneDeep(this.contentOverviewConfigMap);
    }
}



const contentOverviewConfig: ContentOverviewConfig[] = [
    {
        entityName: EntityEnum.ItemWeapon,
        icon: Gavel,
        showInStats: true
    },
    {
        entityName: EntityEnum.ItemWearable,
        icon: Backpack,
        showInStats: true
    },
    {
        entityName: EntityEnum.ItemConsumable,
        icon: Fastfood,
        showInStats: true
    },
    {
        entityName: EntityEnum.Character,
        icon: Person,
        showInStats: true
    },
    {
        entityName: EntityEnum.Religion,
        icon: Church,
        showInStats: true
    },
    {
        entityName: EntityEnum.Memory,
        icon: Memory,
        showInStats: true
    },
    {
        entityName: EntityEnum.Trait,
        icon: Psychology,
        showInStats: true
    },
    {
        entityName: EntityEnum.Background,
        icon: History,
        showInStats: true
    },
    {
        entityName: EntityEnum.CharacterProfession,
        icon: Work,
        showInStats: true
    },
    {
        entityName: EntityEnum.Faction,
        icon: Groups,
        showInStats: true
    },
    {
        entityName: EntityEnum.Disease,
        icon: LocalHospital,
        showInStats: true
    },
    {
        entityName: EntityEnum.Race,
        icon: Diversity3,
        showInStats: true
    },
    {
        entityName: EntityEnum.PersonalityProfile,
        icon: SentimentSatisfied,
        showInStats: true
    },
    {
        entityName: EntityEnum.ItemMiscCurrency,
        icon: Storefront,
        showInStats: false // NOT TO SHOW IN STATS
    },
    {
        entityName: EntityEnum.ItemMisc,
        icon: Inventory2Outlined,
        showInStats: false // NOT TO SHOW IN STATS
    },
    {
        entityName: EntityEnum.ItemRepairable,
        icon: Healing,
        showInStats: false // NOT TO SHOW IN STATS
    },
    {
        entityName: EntityEnum.Item,
        icon: Inventory2Outlined,
        showInStats: false // NOT TO SHOW IN STATS
    },
    {
        entityName: EntityEnum.PastExperience,
        icon: School,
        showInStats: false // NOT TO SHOW IN STATS
    },
    {
        entityName: EntityEnum.CharacterMemory,
        icon: Memory,
        showInStats: false // NOT TO SHOW IN STATS
    },
    {
        entityName: EntityEnum.MemoryPool,
        icon: Memory,
        showInStats: false // NOT TO SHOW IN STATS
    },
    {
        entityName: EntityEnum.MemoryPoolEntry,
        icon: Memory,
        showInStats: false // NOT TO SHOW IN STATS
    },
    {
        entityName: EntityEnum.Skill,
        icon: Science,
        showInStats: false // NOT TO SHOW IN STATS
    },
    {
        entityName: EntityEnum.SkillSet,
        icon: School,
        showInStats: false // NOT TO SHOW IN STATS
    },
    {
        entityName: EntityEnum.EquipmentSlot,
        icon: Backpack,
        showInStats: false // NOT TO SHOW IN STATS
    },
    {
        entityName: EntityEnum.StorageSlot,
        icon: Inventory2Outlined,
        showInStats: false // NOT TO SHOW IN STATS
    },
    {
        entityName: EntityEnum.Addiction,
        icon: CoronavirusOutlined,
        showInStats: false // NOT TO SHOW IN STATS
    },
    {
        entityName: EntityEnum.Birthsign,
        icon: Lightbulb,
        showInStats: false // NOT TO SHOW IN STATS
    },
    {
        entityName: EntityEnum.CharacterGenInstruction,
        icon: Person,
        showInStats: false // NOT TO SHOW IN STATS
    },
    {
        entityName: EntityEnum.CharacterGroupGenInstruction,
        icon: Groups,
        showInStats: false // NOT TO SHOW IN STATS
    },
    {
        entityName: EntityEnum.Effect,
        icon: Science,
        showInStats: false // NOT TO SHOW IN STATS
    },
    {
        entityName: EntityEnum.Fact,
        icon: History,
        showInStats: false // NOT TO SHOW IN STATS
    },
    {
        entityName: EntityEnum.ItemSet,
        icon: Inventory2Outlined,
        showInStats: false // NOT TO SHOW IN STATS
    },
    {
        entityName: EntityEnum.Mood,
        icon: MoodIcon,
        showInStats: false // NOT TO SHOW IN STATS
    },
    {
        entityName: EntityEnum.Need,
        icon: Favorite,
        showInStats: false // NOT TO SHOW IN STATS
    }
]
