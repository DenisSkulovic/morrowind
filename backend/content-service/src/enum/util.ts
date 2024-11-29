export function serializeEnum<T extends object>(enumObj: T, value: string): number {
    const entry = Object.entries(enumObj).find(([key]) => key === value);
    if (!entry) throw new Error(`Enum serialization failed: ${value} not found in ${JSON.stringify(enumObj)}`);
    return entry[1] as number; // Enum values in Protobuf are numeric
}

export function deserializeEnum<T extends object>(enumObj: T, protoValue: number): string {
    const entry = Object.entries(enumObj).find(([_, val]) => val === protoValue);
    if (!entry) throw new Error(`Enum deserialization failed: ${protoValue} not found in ${JSON.stringify(enumObj)}`);
    return entry[0]; // Enum keys in TypeScript are string
}