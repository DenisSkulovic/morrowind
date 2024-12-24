import { Serializable } from "../decorator/serializable.decorator";
import { SearchQuery } from "./search/SearchQuery";
import { ContentService } from "../services/ContentService";
import { Context } from "./Context";
import { LooseObject } from "../types";
import { EntityEnum } from "../enum/EntityEnum";

export interface ContentBaseStatic<T extends ContentBase> {
    new(): T; // content base constructor
    build(obj: LooseObject): T;
    search(filter: SearchQuery, context: Context): Promise<T[]>;
}

export abstract class ContentBase {
    @Serializable()
    id!: string;

    @Serializable()
    blueprintId!: string;

    @Serializable()
    metadata?: { [key: string]: string };

    @Serializable()
    targetEntity!: string;

    @Serializable()
    user!: string;

    @Serializable()
    campaign?: string;

    @Serializable()
    world!: string;

    public static async search<T extends ContentBase>(
        this: ContentBaseStatic<T>,
        filter: SearchQuery,
        context: Context
    ): Promise<T[]> {
        const className: EntityEnum = this.name as EntityEnum; // get class name
        const contentService = new ContentService<T>();
        const { results } = await contentService.searchContent(className, filter, context);
        return results.map((result) => this.build(result));
    }

    public static build<T extends ContentBase>(
        this: ContentBaseStatic<T>,
        obj: LooseObject
    ): T {
        const instance: T = new this(); // create instance of child class
        Object.assign(instance, obj);
        return instance;
    }

    toPlainObj(): LooseObject {
        return JSON.parse(JSON.stringify(this));
    }
}
