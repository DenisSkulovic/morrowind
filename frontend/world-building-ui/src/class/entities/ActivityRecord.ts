import { Serializable } from "../../decorator/serializable.decorator";
import { ActivityEventNameEnum } from "../../enum/ActivityEventNameEnum";
import { serializeEnum, deserializeEnum } from "../../enum/util";
import { ActivityEventNameEnumDTO } from "../../proto/activity_pb";

export class ActivityRecord {
    @Serializable()
    id!: string;

    @Serializable({
        serialize: (val) => serializeEnum(ActivityEventNameEnum, ActivityEventNameEnumDTO, val),
        deserialize: (val) => deserializeEnum(ActivityEventNameEnumDTO, ActivityEventNameEnum, val)
    })
    eventName!: ActivityEventNameEnum;

    @Serializable()
    label?: string;

    @Serializable()
    relatedTargetEntity?: string;

    @Serializable()
    relatedTargetId?: string;

    @Serializable()
    relatedEntityName?: string

    @Serializable()
    createdAt!: Date;

    @Serializable()
    world!: string;

    @Serializable()
    user!: string;

    @Serializable()
    campaign!: string;

    static build(body: any): ActivityRecord {
        return Object.assign(new ActivityRecord(), body)
    }

}