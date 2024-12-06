import { ContentBase } from "../class/ContentBase";
import { MoodDTO } from "../proto/common";
import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serialize/serializer";

export class Mood extends ContentBase {
    @Serializable()
    name!: string;

    @Serializable()
    description!: string;

    public toDTO(): MoodDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: MoodDTO): Mood {
        const mood = new Mood();
        return Serializer.fromDTO(dto, mood);
    }
}
