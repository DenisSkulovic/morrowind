export const rpc = {
    request: async (service: string, method: string, data: Uint8Array): Promise<Uint8Array> => {
        const response = await fetch(`/${service}/${method}`, {
            method: 'POST',
            body: data,
        });
        return new Uint8Array(await response.arrayBuffer());
    }
};
