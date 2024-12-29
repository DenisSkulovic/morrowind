import { Serializable } from "../decorator/serializable.decorator";
import { ContentStatDTO } from "../proto/content";
import { Serializer } from "../serializer";

export class ContentStat {
    @Serializable()
    clazz = "ContentStat"

    @Serializable()
    title!: string

    @Serializable()
    type!: string

    @Serializable()
    count!: number

    @Serializable()
    icon!: string

    @Serializable() // thought of using an actual enum (EntityEnum) instead of string, but it would be a pain to serialize/deserialize
    entity!: string

    static build(body: Partial<ContentStat>): ContentStat {
        const stat = new ContentStat()
        Object.assign(stat, body)
        return stat
    }

    toDTO() {
        return Serializer.toDTO(this)
    }

    static fromDTO(dto: ContentStatDTO): ContentStat {
        return Serializer.fromDTO(dto, new ContentStat())
    }
}