import { ReligionTenetDTO, ReligionTenetsDTO } from "../proto/common_pb";
import { FormField } from "../decorator/form-field.decorator";
import { FieldComponentEnum } from "../enum/FieldComponentEnum";
import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serialize/serializer";
import { DisplayField } from '../decorator/display-field.decorator';
import { EntityDisplay } from '../decorator/entity-display.decorator';
import { FilterOption } from "../decorator/filter-option.decorator";
import { ContentService } from "../services/ContentService";
import { SearchQuery } from "../class/search/SearchQuery";
import { Context } from "../class/Context";
import { common } from "../proto/common";

@EntityDisplay({
    title: 'Religion Tenets',
    defaultSort: 'name'
})
export class ReligionTenet {
    @DisplayField({
        order: 1,
        displayName: 'Name'
    })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter tenet name', required: true })
    name!: string;

    @DisplayField({
        order: 2,
        displayName: 'Description'
    })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Description', placeholder: 'Enter tenet description', required: true })
    description!: string;

    public toDTO(): common.ReligionTenetDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: common.ReligionTenetDTO): ReligionTenet {
        const tenet = new ReligionTenet();
        return Serializer.fromDTO(dto, tenet);
    }

}
