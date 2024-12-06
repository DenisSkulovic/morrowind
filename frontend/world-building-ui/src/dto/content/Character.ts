import { TaggableContentBase } from "../../class/TaggableContentBase";
import { GenderEnum } from "../../enum/GenderEnum";
import { serializeEnum, deserializeEnum } from "../../enum/util";
import { GenderEnumDTO, CharacterDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { Birthsign } from "./Birthsign";
import { Race } from "./Race";
import { EquipmentSlot } from "./Slot/EquipmentSlot";
import { FormField } from "../../decorator/form-field.decorator";
import { FormSelectOption } from "../../class/FormSelectOption";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { CharacterProfession } from "./CharacterProfession";
import { MemoryPool } from "./MemoryPool";
import { Trait } from "./Trait";
import { PastExperience } from "./PastExperience";
import { Faction } from "./Faction";
import { Disease } from "./Disease";
import { Addiction } from "./Addiction";

export class Character extends TaggableContentBase {
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'First Name', placeholder: 'Enter first name', required: true })
    firstName!: string;

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Last Name', placeholder: 'Enter last name', required: true })
    @Serializable()
    lastName!: string;

    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Race',
        search: async (filter): Promise<FormSelectOption[]> => {
            return (await Race.search(filter)).map((item: Race) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable()
    race!: string;

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
        serialize: (i) => serializeEnum(GenderEnum, GenderEnumDTO, i),
        deserialize: (i) => deserializeEnum(GenderEnumDTO, GenderEnum, i)
    })
    gender!: GenderEnum;

    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Birthsign',
        search: async (filter): Promise<FormSelectOption[]> => {
            return (await Birthsign.search(filter)).map((item: Birthsign) => {
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
        component: FieldComponentEnum.EQUIPMENT_SLOT_FIELD,
        label: 'Equipment Slots',
        search: async (filter): Promise<FormSelectOption[]> => {
            return (await EquipmentSlot.search(filter)).map((item: EquipmentSlot) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable({ strategy: 'full' })
    equipmentSlots!: EquipmentSlot[];

    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD,
        label: 'Professions',
        search: async (filter): Promise<FormSelectOption[]> => {
            return (await CharacterProfession.search(filter)).map((item: CharacterProfession) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable()
    professions!: string[];

    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD,
        label: 'Memory Pools',
        search: async (filter): Promise<FormSelectOption[]> => {
            return (await MemoryPool.search(filter)).map((item: MemoryPool) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable()
    memoryPools!: string[];

    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD,
        label: 'Memory Pools',
        search: async (filter): Promise<FormSelectOption[]> => {
            return (await MemoryPool.search(filter)).map((item: MemoryPool) => {
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
        component: FieldComponentEnum.MULTI_SELECT_FIELD, label: 'Traits', search: async (filter): Promise<FormSelectOption[]> => {
            return (await Trait.search(filter)).map((item: Trait) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable()
    traits!: string[];

    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD, label: 'Diseases', search: async (filter): Promise<FormSelectOption[]> => {
            return (await Disease.search(filter)).map((item: Disease) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable()
    diseases?: string[];

    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD, label: 'Addictions', search: async (filter): Promise<FormSelectOption[]> => {
            return (await Addiction.search(filter)).map((item: Addiction) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable()
    addictions?: string[];

    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD,
        label: 'Factions',
        search: async (filter): Promise<FormSelectOption[]> => {
            return (await PastExperience.search(filter)).map((item: PastExperience) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable()
    pastExperiences?: string[];

    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD,
        label: 'Factions',
        search: async (filter): Promise<FormSelectOption[]> => {
            return (await Faction.search(filter)).map((item: Faction) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable()
    factions?: string[];

    public toDTO(): CharacterDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: CharacterDTO): Character {
        const character = new Character();
        return Serializer.fromDTO(dto, character);
    }
}
