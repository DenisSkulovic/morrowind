import { Module } from '@nestjs/common';
import { CharacterGeneratorModule } from './character/character-generator.module';
import { ItemGeneratorModule } from './item/item-generator.module';

@Module({
    imports: [CharacterGeneratorModule, ItemGeneratorModule],
    exports: [CharacterGeneratorModule, ItemGeneratorModule],
})
export class GeneratorModule { }