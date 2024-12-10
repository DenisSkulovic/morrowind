export const rpc = {
    request: async (service: string, method: string, data: Uint8Array): Promise<Uint8Array> => {
        const url = `http://localhost:8080/${service}/${method}`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/grpc-web',
                    'Accept': 'application/grpc-web',
                },
                body: data,
            });

            if (!response.ok) {
                const text = await response.text();
                console.error('Response error:', {
                    status: response.status,
                    statusText: response.statusText,
                    headers: Object.fromEntries(response.headers),
                    body: text
                });
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const buffer = await response.arrayBuffer();
            const uint8Array = new Uint8Array(buffer);
            return uint8Array;
        } catch (error) {
            console.error('RPC request failed:', error);
            throw error;
        }
    }
};