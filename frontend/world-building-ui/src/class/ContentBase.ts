import { Serializable } from "../decorator/serializable.decorator";

export class ContentBase {
    @Serializable()
    id!: string;

    @Serializable()
    blueprintId!: string;

    @Serializable()
    metadata?: { [key: string]: string };

    @Serializable()
    targetEntity!: string;

    @Serializable()
    user!: string;

    @Serializable()
    campaign?: string;

    @Serializable()
    world!: string;
}
