import { TaggableContentBase } from "../class/TaggableContentBase";
import { FactDTO } from "../proto/common";
import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serialize/serializer";

export class Fact extends TaggableContentBase {
    @Serializable()
    name!: string

    @Serializable()
    description!: string

    @Serializable()
    weight!: number // 1 to 20; How "objectively" important the fact is. For example Red Mountain eruption is 20, because its a global event, but to a farmer in Leyawiin it may be a 2 of personal importance of the memory as a whole. The larger the weight, the more you need to accumulate "decay" to forget it. Lower weight facts are forgotten quicker.

    public toDTO(): FactDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: FactDTO): Fact {
        const fact = new Fact();
        return Serializer.fromDTO(dto, fact);
    }

}