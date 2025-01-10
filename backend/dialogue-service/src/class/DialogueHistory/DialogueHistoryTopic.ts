import { Serializable } from "../../common/decorator/serializable.decorator";
import { SerializeStrategyEnum } from "../../common/serializer/serializer";
import { DialogueStep } from "./DialogueStep";

export class DialogueHistoryTopic {
    @Serializable()
    topicName!: string;

    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true, internalClass: DialogueStep })
    stepsNewestToOldest?: DialogueStep[];

    @Serializable()
    clazz = 'DialogueHistoryTopic';

    static validate(data: any) {
        if (!data.topicName) throw new Error('DialogueHistoryTopic: topicName is required');
        if (typeof data.topicName !== 'string') throw new Error('DialogueHistoryTopic: topicName must be a string');
        if (data.stepsNewestToOldest && !Array.isArray(data.stepsNewestToOldest)) throw new Error('DialogueHistoryTopic: stepsNewestToOldest must be an array');
        if (data.stepsNewestToOldest && typeof data.stepsNewestToOldest[0] !== 'object') throw new Error('DialogueHistoryTopic: stepsNewestToOldest must be an array of DialogueStep objects');
    }

    static build(data: any) {
        if (data.clazz !== 'DialogueHistoryTopic') throw new Error("Invalid class");
        DialogueHistoryTopic.validate(data);
        const topic = new DialogueHistoryTopic();
        topic.topicName = data.topicName;
        topic.stepsNewestToOldest = data.stepsNewestToOldest.map((step: any) => DialogueStep.build(step));
        return topic;
    }
}