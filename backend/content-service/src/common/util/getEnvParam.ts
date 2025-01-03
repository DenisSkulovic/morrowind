export function getEnvParam(key: string, defaultValue?: string): string {
    const value = process.env[key];
    if (value === undefined) {
        if (defaultValue !== undefined) {
            return defaultValue;
        }
        throw new Error(`Environment variable "${key}" is not defined and no default value was provided.`);
    }
    return value;
}
