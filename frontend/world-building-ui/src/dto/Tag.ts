import { ContentBase } from "../class/ContentBase";
import { TagDTO } from "../proto/common";
import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serialize/serializer";

export class Tag extends ContentBase {
    @Serializable()
    label!: string; // The tag's name (e.g., "dunmeri", "rare")

    @Serializable()
    subtype!: string;

    public toDTO(): TagDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: TagDTO): Tag {
        const tag = new Tag();
        return Serializer.fromDTO(dto, tag);
    }
}