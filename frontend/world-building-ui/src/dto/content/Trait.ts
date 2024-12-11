import { TaggableContentBase } from "../../class/TaggableContentBase";
import { TraitTypeEnum } from "../../enum/TraitTypeEnum";
import { serializeEnum, deserializeEnum } from "../../enum/util";
import { common } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../class/FormSelectOption";
import { DisplayField } from "../../decorator/display-field.decorator";
import { EntityDisplay } from "../../decorator/entity-display.decorator";
import { FilterOption } from "../../decorator/filter-option.decorator";
import { Context } from "../../class/Context";
import { SearchQuery } from "../../class/search/SearchQuery";
import { ContentService } from "../../services/ContentService";

@EntityDisplay({
    title: 'Traits',
    defaultSort: 'name'
})
export class Trait extends TaggableContentBase {
    @DisplayField({ order: 1 })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter trait name', required: true })
    name!: string;

    @DisplayField({ order: 2 })
    @FilterOption()
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Trait Type',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(TraitTypeEnum).map(value => {
                return { id: value, label: value }
            })
        },
        required: true
    })
    @Serializable({
        serialize: type => serializeEnum(TraitTypeEnum, common.TraitTypeEnumDTO, type),
        deserialize: type => deserializeEnum(common.TraitTypeEnumDTO, TraitTypeEnum, type)
    })
    traitType!: TraitTypeEnum

    public toDTO(): common.TraitDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: common.TraitDTO): Trait {
        const trait = new Trait();
        return Serializer.fromDTO(dto, trait);
    }

    public static async search(filter: SearchQuery, context: Context): Promise<Trait[]> {
        const contentService = new ContentService<Trait>();
        const { results } = await contentService.searchContent('Trait', filter, context);
        return results as Trait[];
    }
}
