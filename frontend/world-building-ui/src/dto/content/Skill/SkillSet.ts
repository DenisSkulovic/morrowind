import { serializeSkillImprovement, deserializeSkillImprovement, SkillImprovement } from "../../../class/SkillImprovement";
import { TaggableContentBase } from "../../../class/TaggableContentBase";
import { common } from "../../../proto/common";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer } from "../../../serialize/serializer";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { EntityDisplay } from "../../../decorator/entity-display.decorator";
import { DisplayField } from "../../../decorator/display-field.decorator";
import { FilterOption } from "../../../decorator/filter-option.decorator";
import { ContentService } from "../../../services/ContentService";
import { Context } from "../../../class/Context";
import { SearchQuery } from "../../../class/search/SearchQuery";

@EntityDisplay({
    title: 'Skill Sets',
    defaultSort: 'name'
})
export class SkillSet extends TaggableContentBase {
    @DisplayField({ order: 1 })
    @FilterOption()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter skill set name', required: true })
    @Serializable()
    name!: string

    @DisplayField({ order: 2 })
    @FormField({ component: FieldComponentEnum.OBJECT_FIELD, label: 'Skill Improvement', required: true })
    @Serializable({ serialize: serializeSkillImprovement, deserialize: deserializeSkillImprovement })
    skillImprovement!: SkillImprovement

    public toDTO(): common.SkillSetDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: common.SkillSetDTO): SkillSet {
        const skillSet = new SkillSet();
        return Serializer.fromDTO(dto, skillSet);
    }

    public static async search(filter: SearchQuery, context: Context): Promise<SkillSet[]> {
        const contentService = new ContentService<SkillSet>();
        const { results } = await contentService.searchContent('SkillSet', filter, context);
        return results as SkillSet[];
    }
}
