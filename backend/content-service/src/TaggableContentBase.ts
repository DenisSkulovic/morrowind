import { ContentBase } from "./ContentBase";
import { Tag } from "./entities/Content/Tag";

export abstract class TaggableContentBase extends ContentBase {
    tags?: Promise<Tag[]> | Tag[];

    addTag(tag: Tag): void {
        if (this.tags instanceof Promise) throw new Error("Cannot use addTag when tags is a Promise. Please perform a proper query");
        if (!this.tags) this.tags = [];
        if (!this.hasTag(tag)) {
            this.tags.push(tag);
        }
    }

    removeTag(tag: Tag): void {
        if (this.tags instanceof Promise) throw new Error("Cannot use removeTag when tags is a Promise. Please perform a proper query");
        if (this.tags) {
            this.tags = this.tags.filter(t => t.id !== tag.id);
        }
    }

    hasTag(tag: Tag): boolean {
        if (this.tags instanceof Promise) throw new Error("Cannot use hasTag when tags is a Promise. Please perform a proper query");
        return this.tags?.some(t => t.id === tag.id) || false;
    }
}