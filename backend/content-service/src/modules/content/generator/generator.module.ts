import { Module } from '@nestjs/common';
import { CharacterGeneratorModule } from './character/character-generator.module';
import { ItemGeneratorModule } from './item/item-generator.module';
import { GeneratorController } from './generator.controller';
import { UserModule } from '../../user/user.module';
import { WorldModule } from '../../world/world.module';
import { CampaignModule } from '../../campaign/campaign.module';

@Module({
    imports: [
        CharacterGeneratorModule,
        ItemGeneratorModule,
        UserModule,
        WorldModule,
        CampaignModule,
    ],
    controllers: [GeneratorController],

})
export class GeneratorModule { }