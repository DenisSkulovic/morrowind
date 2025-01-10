import { Module } from '@nestjs/common';
import { createClient } from 'redis';
import { DialogueStateService } from './dialogueState.service';

const redisProvider = {
    provide: 'REDIS_CLIENT',
    useFactory: async () => {
        const client = createClient({
            url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
        });
        await client.connect();
        return client;
    },
};

@Module({
    providers: [
        DialogueStateService,
        redisProvider,
    ],
    exports: [DialogueStateService]
})
export class DialogueStateModule { }
