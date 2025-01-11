import { io, Socket } from 'socket.io-client';
import { ContentBase } from '../../../class/ContentBase';
import { dialogueBackendURL } from '../../../config';

export class AiContentGeneratorService<T extends ContentBase> {
    private contentWebSocket: Socket;

    constructor() {
        this.contentWebSocket = io(dialogueBackendURL);
    }

    generateContentAI(request: {
        contentType: string;
        parameters: any;
        requestId: string;
    }): Promise<any> {
        return new Promise((resolve, reject) => {
            this.contentWebSocket.emit('generateContent', request);

            this.contentWebSocket.on('contentGenerated', (data) => {
                resolve(data);
            });

            this.contentWebSocket.on('error', (error) => {
                reject(error);
            });
        });
    }

    generateContentAIStreaming(request: {
        contentType: string;
        parameters: any;
        requestId: string;
    }, onChunk: (chunk: any) => void): Promise<void> {
        return new Promise((resolve, reject) => {
            // Emit the initial request
            this.contentWebSocket.emit('generateContent', request);

            // Listen for data chunks
            this.contentWebSocket.on('contentChunk', (chunk) => {
                onChunk(chunk); // Pass the chunk to the callback for handling in the app state
            });

            // Listen for the end of the stream
            this.contentWebSocket.on('streamEnd', () => {
                resolve(); // Stream completed
            });

            // Handle errors
            this.contentWebSocket.on('error', (error) => {
                reject(error);
            });
        });
    }

}