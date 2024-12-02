export function serializeEnum<T extends object>(toEnum: T, value: string): number {
    const entry = Object.entries(toEnum).find(([key]) => key === value);
    if (!entry) throw new Error(`Enum serialization failed: ${value} not found in ${JSON.stringify(toEnum)}`);
    return entry[1] as number; // Enum values in Protobuf are numeric
}

export function deserializeEnum<T extends object>(fromEnum: T, protoValue: number): string {
    const entry = Object.entries(fromEnum).find(([, val]) => val === protoValue);
    console.log(`[deserializeEnum] entry`, entry)
    if (!entry) throw new Error(`Enum deserialization failed: ${protoValue} not found in ${JSON.stringify(fromEnum)}`);
    return entry[1];
}