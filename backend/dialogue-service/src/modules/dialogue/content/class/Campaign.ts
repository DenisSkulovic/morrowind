import { Serializable } from "../../../../common/decorator/serializable.decorator";

export class Campaign {
    @Serializable()
    id!: string;

    public static build(obj: any): Campaign {
        const campaign = new Campaign();
        Object.assign(campaign, obj);
        return campaign;
    }

}