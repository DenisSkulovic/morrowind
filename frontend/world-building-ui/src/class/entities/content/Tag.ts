import { ContentBase } from "../../../class/ContentBase";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { TagSubtypeEnum } from "../../../enum/entityEnums";
import { DisplayField } from '../../../decorator/display-field.decorator';
import { EntityDisplay } from '../../../decorator/entity-display.decorator';
import { FilterOption } from '../../../decorator/filter-option.decorator';

@EntityDisplay({
    title: 'Tags',
    defaultSort: 'label'
})
export class Tag extends ContentBase {
    @DisplayField({
        order: 1,
        displayName: 'Label'
    })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Label', placeholder: 'Enter tag label', required: true })
    label!: string; // The tag's name (e.g., "dunmeri", "rare")

    @DisplayField({ order: 2 })
    @FilterOption()
    @Serializable()
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Subtype',
        search: async () => {
            return Object.values(TagSubtypeEnum).map(value => {
                return { id: value, label: value }
            })
        },
        required: true
    })
    subtype!: TagSubtypeEnum;

}