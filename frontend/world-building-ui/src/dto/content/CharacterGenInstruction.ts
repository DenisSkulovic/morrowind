import { serializeBackgroundCustomization, deserializeBackgroundCustomization, BackgroundCustomization } from "../../class/BackgroundCustomization";
import { ContentBase } from "../../class/ContentBase";
import { GenderEnum } from "../../enum/GenderEnum";
import { serializeEnum, deserializeEnum } from "../../enum/util";
import { GenderEnumDTO, CharacterGenInstructionDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../class/FormSelectOption";
import { Birthsign } from "./Birthsign";

export class CharacterGenInstruction extends ContentBase {
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'First Name', placeholder: 'Enter first name', required: false })
    @Serializable()
    firstName?: string

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Last Name', placeholder: 'Enter last name', required: false })
    @Serializable()
    lastName?: string

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
        serialize: (i: GenderEnum) => serializeEnum(GenderEnum, GenderEnumDTO, i),
        deserialize: (i: GenderEnumDTO | undefined) => typeof i !== "undefined" ? deserializeEnum(GenderEnumDTO, GenderEnum, i) : null
    })
    gender?: GenderEnum

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
    birthsign?: string

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Birth Era', placeholder: 'Enter birth era', required: false })
    @Serializable()
    birthEra?: string

    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Birth Year', placeholder: 'Enter birth year', required: false })
    @Serializable()
    birthYear?: number

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Birth Month', placeholder: 'Enter birth month', required: false })
    @Serializable()
    birthMonth?: string

    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Birth Day', placeholder: 'Enter birth day', required: false })
    @Serializable()
    birthDay?: number

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Background Blueprint ID', placeholder: 'Enter background blueprint ID', required: true })
    @Serializable()
    backgroundBlueprintId!: string

    @FormField({ component: FieldComponentEnum.NESTED_FORM, label: 'Background Customization', required: false })
    @Serializable({
        serialize: serializeBackgroundCustomization,
        deserialize: i => i ? deserializeBackgroundCustomization(i) : null
    })
    backgroundCustomization?: BackgroundCustomization

    public toDTO(): CharacterGenInstructionDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: CharacterGenInstructionDTO): CharacterGenInstruction {
        const chGenInst = new CharacterGenInstruction();
        return Serializer.fromDTO(dto, chGenInst);
    }
}

// example: Fisherman (Beginner). Beginner here would be represented by a tag, and specific memory pools will be connected. On generation, certain memories will be created, but after generation memories begin a free float.

// Fisherman (Beginner)
// Fisherman (Novice)
// Fisherman (Expert)
// Fisherman (Master)

// These would be 4 different professions with different memory pools.
// So lets say when a character changes profession from Fisherman (Beginner) to Fisherman (Novice), they gain access to a different memory pool set and dont immediately learn everything there, but instead start gaining the knowledge as ticks go by, simulating progress in mastery.
// And lets say a character gains a profession, Fisherman (Beginner). They start to slowly go from 0 knowledge to an equilibrium.
// And if its the player character, they would have to either gain direct experience, talk to someone, read a book, etc., to progress with the knowledge in the memory pools.
// Progressing to the next step happens when required memories become very ingrained and resistant. That shows a level of mastery and ability to progress to next mastery level in the profession.
// Profession means both knowledge and skills?...