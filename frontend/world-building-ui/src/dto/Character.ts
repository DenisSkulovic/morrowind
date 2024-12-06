import { TaggableContentBase } from "../class/TaggableContentBase";
import { GenderEnum } from "../enum/GenderEnum";
import { serializeEnum, deserializeEnum } from "../enum/util";
import { GenderEnumDTO, CharacterDTO } from "../proto/common";
import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serialize/serializer";
import { Birthsign } from "./Birthsign";
import { Race } from "./Race";
import { EquipmentSlot } from "./Slot/EquipmentSlot";
import { FormField } from "../decorator/form-field.decorator";
import { FormSelectOption } from "../class/FormSelectOption";

export class Character extends TaggableContentBase {
    @Serializable()
    @FormField({ component: 'TextField', label: 'First Name', placeholder: 'Enter first name', required: true })
    firstName!: string;

    @FormField({ component: 'TextField', label: 'Last Name', placeholder: 'Enter last name', required: true })
    @Serializable()
    lastName!: string;

    @FormField({
        component: 'SelectField',
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
        component: 'SelectField',
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

    @Serializable()
    birthsign?: Birthsign;

    @Serializable()
    birthEra?: string;

    @Serializable()
    birthYear?: number;

    @Serializable()
    birthMonth?: string;

    @Serializable()
    birthDay?: number;

    @Serializable()
    skills!: { [skill: string]: number };

    @Serializable({ strategy: 'full' })
    equipmentSlots!: EquipmentSlot[];

    @Serializable()
    professions!: string[];

    @Serializable()
    memoryPools!: string[];

    @Serializable()
    characterMemories!: string[];

    @Serializable()
    enneagramType!: string;

    @Serializable()
    traits!: string[];

    @Serializable()
    diseases?: string[];

    @Serializable()
    addictions?: string[];

    @Serializable()
    pastExperiences?: string[];

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
