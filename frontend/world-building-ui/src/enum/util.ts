export function serializeEnum<T extends object, E extends object>(fromEnum: T, toEnum: E, value: string): E[keyof E] {
    const entry = Object.entries(fromEnum).find(([enumKey, enumValue]) => enumValue === value);
    if (!entry) throw new Error(`Enum serialization failed: ${value} not found in ${JSON.stringify(fromEnum)}`);
    const key: keyof E = entry[0] as keyof E
    return toEnum[key]
}

export function deserializeEnum<T extends object, E extends object>(fromEnum: T, toEnum: E, protoValue: number): E[keyof E] {
    const entry: [string, string | number] | undefined = Object.entries(fromEnum).find(([, val]) => val === protoValue);
    if (!entry) throw new Error(`Enum deserialization failed: ${protoValue} not found in ${JSON.stringify(fromEnum)}`);
    const key: keyof E = entry[0] as keyof E
    return toEnum[key];
}