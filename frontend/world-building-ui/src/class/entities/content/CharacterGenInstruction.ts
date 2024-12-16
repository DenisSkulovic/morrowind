import { ContentBase } from "../../../class/ContentBase";
import { BackgroundCustomization } from "../../../class/BackgroundCustomization";
import { GenderEnum } from "../../../enum/GenderEnum";
import { serializeEnum, deserializeEnum } from "../../../enum/util";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../../class/FormSelectOption";
import { Birthsign } from "./Birthsign";
import { DisplayField } from '../../../decorator/display-field.decorator';
import { EntityDisplay } from '../../../decorator/entity-display.decorator';
import { FilterOption } from '../../../decorator/filter-option.decorator';
import { Context } from '../../../class/Context';
import { SearchQuery } from '../../../class/search/SearchQuery';
import { GenderEnumDTO } from '../../../proto/common_pb';

@EntityDisplay({
    title: 'Character Generation Instructions',
    defaultSort: 'firstName'
})
export class CharacterGenInstruction extends ContentBase {
    @DisplayField({
        order: 1,
        displayName: 'Name',
        getValue: (inst: CharacterGenInstruction) => inst.firstName || inst.lastName ?
            `${inst.firstName || ''} ${inst.lastName || ''}`.trim() : 'Unnamed'
    })
    @FilterOption()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'First Name', placeholder: 'Enter first name', required: false })
    @Serializable()
    firstName?: string

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Last Name', placeholder: 'Enter last name', required: false })
    @Serializable()
    lastName?: string

    @DisplayField({ order: 2 })
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
        deserialize: gender => typeof gender !== "undefined" ? deserializeEnum(GenderEnumDTO, GenderEnum, gender) : null
    })
    gender?: GenderEnum

    @DisplayField({ order: 3 })
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

    @DisplayField({ order: 4 })
    @FilterOption()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Background Blueprint ID', placeholder: 'Enter background blueprint ID', required: true })
    @Serializable()
    backgroundBlueprintId!: string

    @FormField({ component: FieldComponentEnum.NESTED_FORM, label: 'Background Customization', required: false })
    @Serializable({ strategy: 'full' })
    backgroundCustomization?: BackgroundCustomization

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