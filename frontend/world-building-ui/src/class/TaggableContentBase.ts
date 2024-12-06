import { Tag } from "../dto/Tag";
import { Serializable } from "../decorator/serializable.decorator";
import { ContentBase } from "./ContentBase";

export abstract class TaggableContentBase extends ContentBase {
    @Serializable()
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