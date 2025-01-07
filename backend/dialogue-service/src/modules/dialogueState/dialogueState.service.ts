import { RedisClientType } from 'redis';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { DialogueState } from '../../class/DialogueState';


export enum CacheKeyEnum {
    DIALOGUE_STATE = "DIALOGUE_STATE",
}

@Injectable()
export class DialogueStateService {
    private readonly logger = new Logger(DialogueStateService.name);

    constructor(
        @Inject('REDIS_CLIENT') private readonly redisClient: RedisClientType
    ) { }

    async getState(dialogueId: string): Promise<DialogueState | null> {
        try {
            const cachedState = await this.redisClient.get(`dialogue:${dialogueId}`);
            if (!cachedState) return null
            return DialogueState.build(JSON.parse(cachedState))
        } catch (error: any) {
            throw new Error(`Failed to get state for dialogue id: ${dialogueId}: ${error.message}`);
        }
    }

    async cacheState(dialogueId: string, key: CacheKeyEnum, data: DialogueState): Promise<void> {
        try {
            await this.redisClient.set(
                `dialogue:${dialogueId}:${key}`,
                JSON.stringify(data),
                { EX: 3600 } // 1 hour expiration
            );
        } catch (error: any) {
            throw new Error(`Failed to cache state for dialogue id: ${dialogueId}, key ${key}: ${error.message}`);
        }
    }

    async removeState(dialogueId: string): Promise<void> {
        try {
            const pattern = `dialogue:${dialogueId}*`;
            const keys = await this.redisClient.keys(pattern);

            if (keys.length > 0) {
                await this.redisClient.del(keys);
                this.logger.debug(`Removed ${keys.length} state keys for dialogue id: ${dialogueId}`);
            }
        } catch (error: any) {
            throw new Error(`Failed to remove state for dialogue id: ${dialogueId}: ${error.message}`);
        }
    }

}