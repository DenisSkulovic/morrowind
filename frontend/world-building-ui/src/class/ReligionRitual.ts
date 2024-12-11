import { common } from "../proto/common";
import { FormField } from "../decorator/form-field.decorator";
import { FieldComponentEnum } from "../enum/FieldComponentEnum";
import { Serializer } from "../serialize/serializer";
import { Serializable } from "../decorator/serializable.decorator";
import { DisplayField } from "../decorator/display-field.decorator";
import { EntityDisplay } from "../decorator/entity-display.decorator";
import { FilterOption } from "../decorator/filter-option.decorator";
import { ContentService } from "../services/ContentService";
import { SearchQuery } from "../class/search/SearchQuery";
import { Context } from "../class/Context";

@EntityDisplay({
    title: 'Religion Rituals',
    defaultSort: 'name'
})
export class ReligionRitual {
    clazz = "ReligionRitual"

    @DisplayField({
        order: 1,
        displayName: 'Name'
    })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter ritual name', required: true })
    name!: string;

    @DisplayField({
        order: 2,
        displayName: 'Description'
    })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Description', placeholder: 'Enter ritual description', required: true })
    description!: string;

    public toDTO(): common.ReligionRitualDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: common.ReligionRitualDTO): ReligionRitual {
        const ritual = new ReligionRitual();
        return Serializer.fromDTO(dto, ritual);
    }
}

export function serializeReligionRituals(rituals: ReligionRitual[]): common.ReligionRitualsDTO {
    const message = new common.ReligionRitualsDTO({});
    message.arr = rituals.map(ritual => ritual.toDTO());
    return message;
}

export function deserializeReligionRituals(ritualsDTO: common.ReligionRitualsDTO): ReligionRitual[] {
    return ritualsDTO.arr.map(ritualDTO => ReligionRitual.fromDTO(ritualDTO));
}
