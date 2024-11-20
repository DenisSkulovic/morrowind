import { ContentBase } from "./ContentBase";
import { Tag } from "./entities/Content/Tag";

export abstract class TaggableContentBase extends ContentBase {
    tags?: Tag[];

    addTag(tag: Tag): void {
        if (!this.tags) this.tags = [];
        if (!this.hasTag(tag)) {
            this.tags.push(tag);
        }
    }

    removeTag(tag: Tag): void {
        if (this.tags) {
            this.tags = this.tags.filter(t => t.id !== tag.id);
        }
    }

    hasTag(tag: Tag): boolean {
        return this.tags?.some(t => t.id === tag.id) || false;
    }
}