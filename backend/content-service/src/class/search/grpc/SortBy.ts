import { Serializable } from "../../../decorator/serializable.decorator";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
    InputType as GQLInputType,
} from '@nestjs/graphql';
import { Serializer, SerializeStrategyEnum } from "../../../serializer";
import { SortByDirectionEnumDTO, SortByDTO } from "../../../proto/entities";

export enum SortByDirectionEnum {
    ASC = 'asc',
    DESC = 'desc'
}

@GQLInputType()
export class SortBy {
    @Serializable()
    @GQLField()
    public field!: string;

    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: SortByDirectionEnum, protoEnum: SortByDirectionEnumDTO })
    @GQLField(() => SortByDirectionEnum)
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
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: SortByDTO): SortBy {
        return Serializer.fromDTO(dto, new SortBy());
    }
}
