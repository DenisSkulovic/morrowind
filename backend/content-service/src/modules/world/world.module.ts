import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorldController } from './world.controller';
import { WorldService } from './world.service';
import { World } from './entities/World';

@Module({
    imports: [TypeOrmModule.forFeature([World])],
    controllers: [WorldController],
    providers: [WorldService],
    exports: [WorldService],
})
export class WorldModule { }
