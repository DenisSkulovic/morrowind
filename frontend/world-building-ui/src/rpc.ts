export const rpc = {
    request: async (service: string, method: string, data: Uint8Array): Promise<Uint8Array> => {
        const url = `http://localhost:3000/${service}/${method}`;

        // Log the raw data being sent
        console.log('Raw request data:', {
            byteLength: data.byteLength,
            firstFewBytes: Array.from(data.slice(0, 10))
        });

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    // Add the exact headers from your working Postman request
                    'Content-Type': 'application/x-protobuf',
                    'Accept': 'application/x-protobuf',
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
            return new Uint8Array(buffer);
        } catch (error) {
            console.error('RPC request failed:', error);
            throw error;
        }
    }
};