import { Serializable } from "../../decorator/serializable.decorator";
import { ActivityEventNameEnum } from "../../enum/ActivityEventNameEnum";
import { serializeEnum, deserializeEnum } from "../../enum/util";
import { ActivityEventNameEnumDTO } from "../../proto/activity_pb";
import { LooseObject } from "../../types";

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

    @Serializable({
        serialize: (val: Date) => val.getTime(),
        deserialize: (val: number) => new Date(val)
    })
    createdAt!: Date;

    @Serializable()
    world!: string;

    @Serializable()
    user!: string;

    @Serializable()
    campaign!: string;

    static build(body: any): ActivityRecord {
        const activityRecord = new ActivityRecord()
        Object.assign(activityRecord, body)
        return activityRecord
    }

    toPlainObj(): LooseObject {
        return JSON.parse(JSON.stringify(this));
    }

}