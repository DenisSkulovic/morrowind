import { Serializable } from "../../../decorator/serializable.decorator";
import Serializer, { SerializeStrategyEnum } from "../../../serialize/serializer";
import { SortByDirectionEnumDTO, SortByDTO } from "../../../proto/entities_pb";

export enum SortByDirectionEnum {
    ASC = 'asc',
    DESC = 'desc'
}

export class SortBy {
    @Serializable()
    public field!: string;

    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: SortByDirectionEnum, protoEnum: SortByDirectionEnumDTO })
    public direction!: SortByDirectionEnum;

    static build(body: any): SortBy {
        if (!body.field || typeof body.field !== 'string') {
            throw new Error('Sort field must be a string');
        }
        if (!body.direction || !Object.values(SortByDirectionEnum).includes(body.direction)) {
            throw new Error('Sort direction must be a valid SortByDirectionEnum value');
        }
        const newSortBy = new SortBy();
        Object.assign(newSortBy, body);
        return newSortBy;
    }

    public toDTO(): SortByDTO {
        return Serializer.toDTO(this, new SortByDTO());
    }

    public static fromDTO(dto: SortByDTO): SortBy {
        return Serializer.fromDTO(dto, new SortBy());
    }
}
