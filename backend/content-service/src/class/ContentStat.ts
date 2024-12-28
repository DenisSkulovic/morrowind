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

    toDTO() {
        return Serializer.toDTO(this)
    }

    static fromDTO(dto: ContentStatDTO): ContentStat {
        return Serializer.fromDTO(dto, new ContentStat())
    }
}