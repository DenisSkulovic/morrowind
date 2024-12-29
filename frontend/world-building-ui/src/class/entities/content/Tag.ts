import { ContentBase } from "../../../class/ContentBase";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { TagSubtypeEnum } from "../../../enum/entityEnums";
import { DisplayField } from '../../../decorator/display-field.decorator';
import { EntityDisplay } from '../../../decorator/entity-display.decorator';
import { FilterOption, FilterOptionTypeEnum } from '../../../decorator/filter-option.decorator';
import { SerializeStrategyEnum } from "../../../serialize/serializer";
import { TagSubtypeEnumDTO } from "../../../proto/common_pb";

@EntityDisplay({
    title: 'Tags',
    defaultSort: 'label'
})
export class Tag extends ContentBase {
    @DisplayField({
        displayName: 'Label'
    })
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Label', placeholder: 'Enter tag label', required: true })
    label!: string; // The tag's name (e.g., "dunmeri", "rare")

    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.SELECT, enum: TagSubtypeEnum })
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: TagSubtypeEnum, protoEnum: TagSubtypeEnumDTO })
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