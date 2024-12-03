import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { DataSourceEnum } from '../../common/enum/DataSourceEnum';
import { Campaign } from './entities/Campaign';

export interface ICampaignService {
    create(data: any, source: DataSourceEnum): Promise<Campaign[]>

    findAll(source: DataSourceEnum): Promise<Campaign[]>
}

@Injectable()
export class CampaignService implements ICampaignService {
    constructor(
        @InjectDataSource(DataSourceEnum.DATA_SOURCE_WORLD) private readonly worldDataSource: DataSource,
        @InjectDataSource(DataSourceEnum.DATA_SOURCE_CAMPAIGN) private readonly campaignDataSource: DataSource,
    ) { }

    private getDataSource(source: DataSourceEnum): DataSource {
        return source === DataSourceEnum.DATA_SOURCE_WORLD ? this.worldDataSource : this.campaignDataSource;
    }

    getRepository(source: DataSourceEnum): Repository<Campaign> {
        return this.getDataSource(source).getRepository(Campaign);
    }

    public async findCampaign(campaignId: string, userId: string, source: DataSourceEnum): Promise<Campaign | null> {
        const campaignRepository = this.getRepository(source)
        const campaigns: Campaign[] = await campaignRepository.find({
            where: {
                id: campaignId,
                user: { id: userId }
            }
        })
        const campaign: Campaign | null = campaigns[0] || null
        return campaign
    }

    async create(data: any, source: DataSourceEnum): Promise<Campaign[]> {
        const repository = this.getRepository(source);
        const entity = repository.create(data);
        return await repository.save(entity);
    }

    async findAll(source: DataSourceEnum): Promise<Campaign[]> {
        const repository: Repository<Campaign> = this.getRepository(source);
        return await repository.find();
    }


}
