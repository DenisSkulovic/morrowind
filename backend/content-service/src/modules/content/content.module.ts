import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { CONTENT_ENTITY_MAP } from '../../CONTENT_ENTITY_MAP';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';

@Module({
    imports: [TypeOrmModule.forFeature(Object.values(CONTENT_ENTITY_MAP) as EntityClassOrSchema[])],
    controllers: [ContentController],
    providers: [ContentService],
    exports: [ContentService],
})
export class ContentModule { }
