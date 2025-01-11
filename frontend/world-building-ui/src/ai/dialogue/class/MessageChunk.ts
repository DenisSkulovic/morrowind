export class MessageChunk {
    index!: number;
    textChunk!: string;

    static validate(body: any): void {
        if (body.index === undefined || body.textChunk === undefined || body.isLast === undefined) {
            throw new Error('Invalid MessageChunk');
        }
    }

    static build(body: any): MessageChunk {
        const chunk = new MessageChunk();
        chunk.index = body.index;
        chunk.textChunk = body.textChunk;
        return chunk;
    }

}
