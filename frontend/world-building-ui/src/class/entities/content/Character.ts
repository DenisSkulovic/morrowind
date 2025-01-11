import { TaggableContentBase } from "../../../class/TaggableContentBase";
import { GenderEnum } from "../../../enum/GenderEnum";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Birthsign } from "./Birthsign";
import { Race } from "./Race";
import { EquipmentSlot } from "./Slot/EquipmentSlot";
import { FormField } from "../../../decorator/form-field.decorator";
import { FormSelectOption } from "../../../class/FormSelectOption";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { CharacterProfession } from "./CharacterProfession";
import { MemoryPool } from "./MemoryPool";
import { Trait } from "./Trait";
import { PastExperience } from "./PastExperience";
import { Faction } from "./Faction";
import { Disease } from "./Disease";
import { Addiction } from "./Addiction";
import { DisplayField } from '../../../decorator/display-field.decorator';
import { EntityDisplay } from '../../../decorator/entity-display.decorator';
import { FilterOption, FilterOptionTypeEnum } from '../../../decorator/filter-option.decorator';
import { SearchQuery } from '../../../class/search/SearchQuery';
import { Context } from '../../../class/Context';
import {
    AddictionDTO,
    AddictionsDTO, BirthsignDTO, CharacterMemoriesDTO,
    CharacterMemoryDTO,
    CharacterProfessionDTO,
    CharacterProfessionsDTO, DiseaseDTO, DiseasesDTO, EquipmentSlotDTO, EquipmentSlotsDTO,
    FactionDTO,
    FactionsDTO, GenderEnumDTO, MemoryPoolDTO, MemoryPoolsDTO,
    PastExperienceDTO,
    PastExperiencesDTO, RaceDTO, TraitDTO, TraitsDTO
} from '../../../proto/entities_pb';
import { CharacterMemory } from "./CharacterMemory";
import { SerializeStrategyEnum } from "../../../serialize/serializer";

@EntityDisplay({
    title: 'Characters',
    defaultSort: 'firstName'
})
export class Character extends TaggableContentBase {
    @DisplayField({
        displayName: 'Name',
        getValue: (char: Character) => `${char.firstName} ${char.lastName}`
    })
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'First Name', placeholder: 'Enter first name', required: true })
    @Serializable()
    firstName!: string;

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Last Name', placeholder: 'Enter last name', required: true })
    @Serializable()
    lastName!: string;

    @DisplayField()
    @FilterOption({
        type: FilterOptionTypeEnum.SELECT,
        getSelectOptions: async (filter: SearchQuery, context: Context) => {
            return (await Race.search<Race>(filter, context)).map((item: Race) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Race',
        search: async (filter: SearchQuery, context: Context): Promise<FormSelectOption[]> => {
            return (await Race.search<Race>(filter, context)).map((item: Race) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable({ strategy: SerializeStrategyEnum.ID, internalClass: Race, dtoClass: RaceDTO })
    race!: Race;

    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.SELECT, enum: GenderEnum })
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Gender',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(GenderEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
    })
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: GenderEnum, protoEnum: GenderEnumDTO })
    gender!: GenderEnum;

    @DisplayField()
    @FilterOption({
        type: FilterOptionTypeEnum.SELECT, getSelectOptions: async (filter: SearchQuery, context: Context) => {
            return (await Birthsign.search<Birthsign>(filter, context)).map((item: Birthsign) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Birthsign',
        search: async (filter: SearchQuery, context: Context): Promise<FormSelectOption[]> => {
            return (await Birthsign.search<Birthsign>(filter, context)).map((item: Birthsign) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable()
    birthsign?: string;

    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Birth Era', placeholder: 'Enter birth era' })
    @Serializable()
    birthEra?: string;

    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.NUMBER_RANGE })
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Birth Year', placeholder: 'Enter birth year', required: false })
    @Serializable()
    birthYear?: number;

    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.NUMBER_RANGE })
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Birth Month', placeholder: 'Enter birth month', required: false })
    @Serializable()
    birthMonth?: number;

    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Birth Day', placeholder: 'Enter birth day', required: false })
    @Serializable()
    birthDay?: number;

    @FormField({ component: FieldComponentEnum.OBJECT_FIELD, label: 'Skills', placeholder: 'Enter skills', required: false })
    @Serializable()
    skills!: { [skill: string]: number };

    @FormField({
        component: FieldComponentEnum.NESTED_FORM,
        label: 'Equipment Slots',
        search: async (filter, context): Promise<FormSelectOption[]> => {
            return (await EquipmentSlot.search<EquipmentSlot>(filter, context)).map((item: EquipmentSlot) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable({ strategy: SerializeStrategyEnum.FULL, internalClass: EquipmentSlot, dtoClass: EquipmentSlotDTO, dtoArrClass: EquipmentSlotsDTO })
    equipmentSlots!: EquipmentSlot[];

    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD,
        label: 'Professions',
        search: async (filter, context): Promise<FormSelectOption[]> => {
            return (await CharacterProfession.search<CharacterProfession>(filter, context)).map((item: CharacterProfession) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable({ strategy: SerializeStrategyEnum.ID, internalClass: CharacterProfession, dtoClass: CharacterProfessionDTO, dtoArrClass: CharacterProfessionsDTO })
    professions!: CharacterProfession[];

    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD,
        label: 'Memory Pools',
        search: async (filter, context): Promise<FormSelectOption[]> => {
            return (await MemoryPool.search<MemoryPool>(filter, context)).map((item: MemoryPool) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable({ strategy: SerializeStrategyEnum.ID, internalClass: MemoryPool, dtoClass: MemoryPoolDTO, dtoArrClass: MemoryPoolsDTO })
    memoryPools!: MemoryPool[];

    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD,
        label: 'Memory Pools',
        search: async (filter, context): Promise<FormSelectOption[]> => {
            return (await MemoryPool.search<MemoryPool>(filter, context)).map((item: MemoryPool) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable({ strategy: SerializeStrategyEnum.ID, internalClass: CharacterMemory, dtoClass: CharacterMemoryDTO, dtoArrClass: CharacterMemoriesDTO })
    characterMemories!: CharacterMemory[];

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Enneagram Type', placeholder: 'Enter enneagram type' })
    @Serializable()
    enneagramType!: string;

    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD, label: 'Traits', search: async (filter, context): Promise<FormSelectOption[]> => {
            return (await Trait.search<Trait>(filter, context)).map((item: Trait) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable({ strategy: SerializeStrategyEnum.ID, internalClass: Trait, dtoClass: TraitDTO, dtoArrClass: TraitsDTO })
    traits!: Trait[];

    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD, label: 'Diseases', search: async (filter, context): Promise<FormSelectOption[]> => {
            return (await Disease.search<Disease>(filter, context)).map((item: Disease) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable({ strategy: SerializeStrategyEnum.ID, internalClass: Disease, dtoClass: DiseaseDTO, dtoArrClass: DiseasesDTO })
    diseases?: Disease[];

    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD, label: 'Addictions', search: async (filter, context): Promise<FormSelectOption[]> => {
            return (await Addiction.search<Addiction>(filter, context)).map((item: Addiction) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable({ strategy: SerializeStrategyEnum.ID, internalClass: Addiction, dtoClass: AddictionDTO, dtoArrClass: AddictionsDTO })
    addictions?: Addiction[];

    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD,
        label: 'Factions',
        search: async (filter, context): Promise<FormSelectOption[]> => {
            return (await PastExperience.search<PastExperience>(filter, context)).map((item: PastExperience) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable({ strategy: SerializeStrategyEnum.ID, internalClass: PastExperience, dtoClass: PastExperienceDTO, dtoArrClass: PastExperiencesDTO })
    pastExperiences?: PastExperience[];

    @DisplayField()
    @FilterOption({
        type: FilterOptionTypeEnum.MULTI_SELECT, getSelectOptions: async (filter, context): Promise<FormSelectOption[]> => {
            return (await Faction.search<Faction>(filter, context)).map((item: Faction) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD,
        label: 'Factions',
        search: async (filter, context): Promise<FormSelectOption[]> => {
            return (await Faction.search<Faction>(filter, context)).map((item: Faction) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable({ strategy: SerializeStrategyEnum.ID, internalClass: Faction, dtoClass: FactionDTO, dtoArrClass: FactionsDTO })
    factions?: Faction[];

}
