import { LooseObject } from "../types";

export class ContentStat {
    constructor(
        public title: string,
        public type: string,
        public count: number,
        public icon: string,
    ) { }

    public static build(data: LooseObject): ContentStat {
        return new ContentStat(data.title, data.type, data.count, data.icon);
    }
}
