import { Serializable } from "../decorator/serializable.decorator";
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

    public static build(data: LooseObject): ContentStat {
        const contentStat = new ContentStat();
        Object.assign(contentStat, data);
        return contentStat;
    }

    toPlainObj(): LooseObject {
        return JSON.parse(JSON.stringify(this));
    }
}