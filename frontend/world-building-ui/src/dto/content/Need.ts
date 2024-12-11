import { ContentBase } from "../../class/ContentBase";
import { NeedTypeEnum, NeedLayerEnum } from "../../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../enum/util";
import { common } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../class/FormSelectOption";
import { DisplayField } from '../../decorator/display-field.decorator';
import { EntityDisplay } from '../../decorator/entity-display.decorator';
import { FilterOption } from "../../decorator/filter-option.decorator";
import { Context } from "../../class/Context";
import { ContentService } from "../../services/ContentService";
import { SearchQuery } from "../../class/search/SearchQuery";

@EntityDisplay({
    title: 'Needs',
    defaultSort: 'name'
})
export class Need extends ContentBase {
    @DisplayField({ order: 1 })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter need name', required: true })
    name!: string;

    @DisplayField({ order: 2 })
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter need description', required: true })
    description!: string;

    @DisplayField({ order: 3 })
    @FilterOption()
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Need Type',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(NeedTypeEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
    })
    @Serializable({
        serialize: type => serializeEnum(NeedTypeEnum, common.NeedTypeEnumDTO, type),
        deserialize: type => deserializeEnum(common.NeedTypeEnumDTO, NeedTypeEnum, type),
    })
    type!: NeedTypeEnum; // "dynamic", "threshold", "external".

    @DisplayField({ order: 4 })
    @FilterOption()
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Need Layer',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(NeedLayerEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
    })
    @Serializable({
        serialize: layer => serializeEnum(NeedLayerEnum, common.NeedLayerEnumDTO, layer),
        deserialize: layer => deserializeEnum(common.NeedLayerEnumDTO, NeedLayerEnum, layer),
    })
    layer!: NeedLayerEnum

    public toDTO(): common.NeedDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: common.NeedDTO): Need {
        const need = new Need();
        return Serializer.fromDTO(dto, need);
    }

    public static async search(filter: SearchQuery, context: Context): Promise<Need[]> {
        const contentService = new ContentService<Need>();
        const { results } = await contentService.searchContent('Need', filter, context);
        return results as Need[];
    }
}
