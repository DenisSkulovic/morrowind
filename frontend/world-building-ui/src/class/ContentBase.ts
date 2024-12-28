import { Serializable } from "../decorator/serializable.decorator";
import { SearchQuery } from "./search/SearchQuery";
import { ContentService } from "../services/ContentService";
import { Context } from "./Context";
import { LooseObject } from "../types";
import { EntityEnum } from "../enum/EntityEnum";
import { Entity } from "./Entity";
import { UserDTO } from "../proto/common_pb";
import { CampaignDTO } from "../proto/common_pb";
import { Campaign } from "./entities/Campaign";
import { WorldDTO } from "../proto/common_pb";
import { World } from "./entities/World";
import { User } from "./entities/User";
import { SerializeStrategyEnum } from "../serialize/serializer";

export interface ContentBaseStatic<T extends ContentBase> {
    new(): T; // content base constructor
    build(obj: LooseObject): T;
    search(filter: SearchQuery, context: Context): Promise<T[]>;
}

export abstract class ContentBase extends Entity {
    @Serializable()
    id!: string;

    @Serializable()
    blueprintId!: string;

    @Serializable()
    metadata?: { [key: string]: string };

    @Serializable()
    targetEntity!: string;

    @Serializable({ strategy: SerializeStrategyEnum.ID, dtoClass: UserDTO })
    user!: User;

    @Serializable({ strategy: SerializeStrategyEnum.ID, dtoClass: CampaignDTO })
    campaign?: Campaign;

    @Serializable({ strategy: SerializeStrategyEnum.ID, dtoClass: WorldDTO })
    world?: World;

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
