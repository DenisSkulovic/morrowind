import { common } from "../proto/common";
import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serialize/serializer";

export class Campaign {
    @Serializable()
    id!: string;

    @Serializable()
    name!: string;

    @Serializable()
    description?: string;

    @Serializable()
    dynamicState?: any;

    @Serializable()
    world!: string;

    @Serializable()
    createdAt!: number;

    @Serializable()
    user!: string;

    public toDTO(): common.CampaignDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: common.CampaignDTO): Campaign {
        const campaign = new Campaign();
        return Serializer.fromDTO(dto, campaign);
    }
}
