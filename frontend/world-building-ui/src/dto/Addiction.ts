import { ContentBase } from "../class/ContentBase";
import { AddictionDTO } from "../proto/common";
import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serialize/serializer";

export class Addiction extends ContentBase {
    @Serializable()
    name!: string

    public toDTO(): AddictionDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: AddictionDTO): Addiction {
        const addiction = new Addiction();
        return Serializer.fromDTO(dto, addiction);
    }
}