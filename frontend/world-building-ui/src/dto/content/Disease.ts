import { TaggableContentBase } from "../../class/TaggableContentBase";
import { DiseaseSeverityEnum } from "../../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../enum/util";
import { DiseaseSeverityEnumDTO, DiseaseDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../class/FormSelectOption";
import { DisplayField } from '../../decorator/display-field.decorator';
import { EntityDisplay } from '../../decorator/entity-display.decorator';
import { FilterOption } from "../../decorator/filter-option.decorator";
import { ContentService } from "../../services/ContentService";
import { Context } from "../../class/Context";
import { SearchQuery } from "../../class/search/SearchQuery";

@EntityDisplay({
    title: 'Diseases',
    defaultSort: 'name'
})
export class Disease extends TaggableContentBase {
    @DisplayField({
        order: 1,
        displayName: 'Name'
    })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter disease name', required: true })
    name!: string;

    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter disease description', required: true })
    description!: string;

    @DisplayField({
        order: 2,
        displayName: 'Severity'
    })
    @FilterOption()
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Severity',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(DiseaseSeverityEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
    })
    @Serializable({
        serialize: type => serializeEnum(DiseaseSeverityEnum, DiseaseSeverityEnumDTO, type),
        deserialize: type => deserializeEnum(DiseaseSeverityEnumDTO, DiseaseSeverityEnum, type),
    })
    severity!: DiseaseSeverityEnum;

    public toDTO(): DiseaseDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: DiseaseDTO): Disease {
        const disease = new Disease();
        return Serializer.fromDTO(dto, disease);
    }

    public static async search(filter: SearchQuery, context: Context): Promise<Disease[]> {
        const contentService = new ContentService<Disease>();
        const { results } = await contentService.searchContent('Disease', filter, 1, 100, context);
        return results as Disease[];
    }
}
