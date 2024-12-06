import { Serializable } from "../decorator/serializable.decorator";

export abstract class ContentBase {
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

    public toDTO(): any {
        throw new Error("Not implemented")
    }

    public static fromDTO(dto: any): ContentBase {
        throw new Error("Not implemented")
    }

    public static async search(filter?: any): Promise<ContentBase[]> {
        throw new Error("Not implemented")
    }
}
