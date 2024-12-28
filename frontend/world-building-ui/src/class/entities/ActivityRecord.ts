import { Serializable } from "../../decorator/serializable.decorator";
import { ActivityEventNameEnum } from "../../enum/ActivityEventNameEnum";
import { ActivityEventNameEnumDTO } from "../../proto/activity_pb";
import { LooseObject } from "../../types";
import { Entity } from "../Entity";

import { SerializeStrategyEnum } from "../../serialize/serializer";
export class ActivityRecord extends Entity {
    @Serializable()
    id!: string;

    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: ActivityEventNameEnum, protoEnum: ActivityEventNameEnumDTO })
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
        const activityRecord = new ActivityRecord()
        Object.assign(activityRecord, body)
        return activityRecord
    }

    toPlainObj(): LooseObject {
        return JSON.parse(JSON.stringify(this));
    }

}