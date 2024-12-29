import { Serializable } from "../decorator/serializable.decorator";
import { EntityEnum } from "../enum/EntityEnum";
import { SerializeStrategyEnum } from "../serialize/serializer";
import { LooseObject } from "../types";

export class ContentStat {
    @Serializable()
    title!: string;

    @Serializable()
    type!: string;

    @Serializable()
    count!: number;

    @Serializable()
    icon!: string;

    @Serializable() // TODO thought of using an actual enum (EntityEnum) instead of string, but it would be a pain to serialize/deserialize
    entity!: string;

    public static build(data: LooseObject): ContentStat {
        const contentStat = new ContentStat();
        Object.assign(contentStat, data);
        return contentStat;
    }

    toPlainObj(): LooseObject {
        return JSON.parse(JSON.stringify(this));
    }
}