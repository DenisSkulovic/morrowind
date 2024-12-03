import { Module } from '@nestjs/common';
import { CharacterGeneratorModule } from './character/character-generator.module';
import { ItemGeneratorModule } from './item/item-generator.module';
import { GeneratorController } from './generator.controller';

@Module({
    imports: [
        CharacterGeneratorModule,
        ItemGeneratorModule
    ],
    controllers: [GeneratorController],

})
export class GeneratorModule { }