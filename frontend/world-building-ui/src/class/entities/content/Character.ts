import { TaggableContentBase } from "../../../class/TaggableContentBase";
import { GenderEnum } from "../../../enum/GenderEnum";
import { serializeEnum, deserializeEnum } from "../../../enum/util";
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
import { FilterOption } from '../../../decorator/filter-option.decorator';
import { SearchQuery } from '../../../class/search/SearchQuery';
import { Context } from '../../../class/Context';
import { EquipmentSlotsDTO, GenderEnumDTO } from '../../../proto/common_pb';

@EntityDisplay({
    title: 'Characters',
    defaultSort: 'firstName'
})
export class Character extends TaggableContentBase {
    @DisplayField({
        order: 1,
        displayName: 'Name',
        getValue: (char: Character) => `${char.firstName} ${char.lastName}`
    })
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'First Name', placeholder: 'Enter first name', required: true })
    @Serializable()
    firstName!: string;

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Last Name', placeholder: 'Enter last name', required: true })
    @Serializable()
    lastName!: string;

    @DisplayField({ order: 2 })
    @FilterOption()
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Race',
        search: async (filter: SearchQuery, context: Context): Promise<FormSelectOption[]> => {
            return (await Race.search<Race>(filter, context)).map((item: Race) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable()
    race!: string;

    @DisplayField({ order: 3 })
    @FilterOption()
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Gender',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(GenderEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
    })
    @Serializable({
        serialize: gender => serializeEnum(GenderEnum, GenderEnumDTO, gender),
        deserialize: gender => deserializeEnum(GenderEnumDTO, GenderEnum, gender),
    })
    gender!: GenderEnum;

    @DisplayField({ order: 4 })
    @FilterOption()
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

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Birth Era', placeholder: 'Enter birth era' })
    @Serializable()
    birthEra?: string;

    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Birth Year', placeholder: 'Enter birth year', required: false })
    @Serializable()
    birthYear?: number;

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Birth Month', placeholder: 'Enter birth month', required: false })
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
    @Serializable({ strategy: 'full', getDTOInstance: () => new EquipmentSlotsDTO() })
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
    @Serializable()
    professions!: string[];

    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD,
        label: 'Memory Pools',
        search: async (filter, context): Promise<FormSelectOption[]> => {
            return (await MemoryPool.search<MemoryPool>(filter, context)).map((item: MemoryPool) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable()
    memoryPools!: string[];

    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD,
        label: 'Memory Pools',
        search: async (filter, context): Promise<FormSelectOption[]> => {
            return (await MemoryPool.search<MemoryPool>(filter, context)).map((item: MemoryPool) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable()
    characterMemories!: string[];

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
    @Serializable()
    traits!: string[];

    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD, label: 'Diseases', search: async (filter, context): Promise<FormSelectOption[]> => {
            return (await Disease.search<Disease>(filter, context)).map((item: Disease) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable()
    diseases?: string[];

    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD, label: 'Addictions', search: async (filter, context): Promise<FormSelectOption[]> => {
            return (await Addiction.search<Addiction>(filter, context)).map((item: Addiction) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable()
    addictions?: string[];

    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD,
        label: 'Factions',
        search: async (filter, context): Promise<FormSelectOption[]> => {
            return (await PastExperience.search<PastExperience>(filter, context)).map((item: PastExperience) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable()
    pastExperiences?: string[];

    @DisplayField({ order: 5 })
    @FilterOption()
    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD,
        label: 'Factions',
        search: async (filter, context): Promise<FormSelectOption[]> => {
            return (await Faction.search<Faction>(filter, context)).map((item: Faction) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable()
    factions?: string[];

}
