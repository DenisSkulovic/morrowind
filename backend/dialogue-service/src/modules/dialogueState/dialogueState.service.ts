import { RedisClientType } from 'redis';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { DialogueState } from '../../class/DialogueState';


@Injectable()
export class DialogueStateService {
    private readonly logger = new Logger(DialogueStateService.name);

    constructor(
        @Inject('REDIS_CLIENT') private readonly redisClient: RedisClientType
    ) { }

    async getState(sessionId: string): Promise<DialogueState | null> {
        try {
            const cachedState = await this.redisClient.get(`dialogue:${sessionId}`);
            if (!cachedState) return null
            return DialogueState.build(JSON.parse(cachedState))
        } catch (error: any) {
            throw new Error(`Failed to get state for session ${sessionId}: ${error.message}`);
        }
    }

    async cacheState(sessionId: string, key: string, data: DialogueState): Promise<void> {
        try {
            await this.redisClient.set(
                `dialogue:${sessionId}:${key}`,
                JSON.stringify(data),
                { EX: 3600 } // 1 hour expiration
            );
        } catch (error: any) {
            throw new Error(`Failed to cache state for session ${sessionId}, key ${key}: ${error.message}`);
        }
    }

    async removeState(sessionId: string): Promise<void> {
        try {
            const pattern = `dialogue:${sessionId}*`;
            const keys = await this.redisClient.keys(pattern);

            if (keys.length > 0) {
                await this.redisClient.del(keys);
                this.logger.debug(`Removed ${keys.length} state keys for session ${sessionId}`);
            }
        } catch (error: any) {
            throw new Error(`Failed to remove state for session ${sessionId}: ${error.message}`);
        }
    }

}