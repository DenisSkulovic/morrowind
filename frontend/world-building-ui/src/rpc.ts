import { grpc } from '@improbable-eng/grpc-web';

export interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

export const rpc: Rpc = {
    request: (service, method, data) => {
        return new Promise<Uint8Array>((resolve, reject) => {
            grpc.unary(service[method], {
                request: data,
                host: 'http://localhost:8080',
                onEnd: (response) => {
                    const { status, message } = response;
                    if (status === grpc.Code.OK && message) {
                        resolve(message.serializeBinary());
                    } else {
                        reject(new Error(`gRPC error: ${status}`));
                    }
                },
            });
        });
    },
};
