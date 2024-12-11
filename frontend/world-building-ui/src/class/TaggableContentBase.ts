import { Tag } from "../dto/content/Tag";
import { Serializable } from "../decorator/serializable.decorator";
import { ContentBase } from "./ContentBase";
import { FormField } from "../decorator/form-field.decorator";
import { FieldComponentEnum } from "../enum/FieldComponentEnum";
import { FormSelectOption } from "./FormSelectOption";

export abstract class TaggableContentBase extends ContentBase {
    @Serializable()
    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD,
        label: 'Tags',
        search: async (filter, context): Promise<FormSelectOption[]> => {
            return (await Tag.search(filter, context)).map((item: Tag) => {
                return { id: item.id, label: item.label }
            })
        }
    })
    tags?: string[];

    addTag(tag: Tag): void {
        if (this.tags instanceof Promise) throw new Error("Cannot use addTag when tags is a Promise. Please perform a proper query");
        if (!this.tags) this.tags = [];
        if (!this.hasTag(tag)) {
            this.tags.push(tag.id);
        }
    }

    removeTag(tag: Tag): void {
        if (this.tags instanceof Promise) throw new Error("Cannot use removeTag when tags is a Promise. Please perform a proper query");
        if (this.tags) {
            this.tags = this.tags.filter(t => t !== tag.id);
        }
    }

    hasTag(tag: Tag): boolean {
        if (this.tags instanceof Promise) throw new Error("Cannot use hasTag when tags is a Promise. Please perform a proper query");
        return this.tags?.some(t => t === tag.id) || false;
    }
}