

export function serializeEnum<T extends object, E extends object>(fromEnum: T, toEnum: E, value: string): E[keyof E] {
    const entry = Object.entries(fromEnum).find(([enumKey, enumValue]) =>
        enumValue === value || enumKey === value
    );

    if (!entry) throw new Error(`Enum serialization failed: value '${value}' not found in source enum ${JSON.stringify(fromEnum)}`);
    const key: keyof E = entry[0] as keyof E
    const result = toEnum[key];
    if (result === undefined) throw new Error(`Enum serialization failed: key '${String(key)}' not found in target enum ${JSON.stringify(toEnum)}`);
    return result;
}

export function deserializeEnum<T extends object, E extends object>(fromEnum: T, toEnum: E, protoValue: number | string): E[keyof E] {
    const entry: [string, string | number] | undefined = Object.entries(fromEnum).find(([key, val]) => {
        if (typeof protoValue === "number") {
            return val === protoValue
        } else {
            return key === protoValue
        }
    });
    if (!entry) throw new Error(`Enum deserialization failed: value '${protoValue}' not found in source enum ${JSON.stringify(fromEnum)}`);
    const key: keyof E = entry[0] as keyof E
    const result = toEnum[key];
    if (result === undefined) throw new Error(`Enum deserialization failed: key '${String(key)}' not found in target enum ${JSON.stringify(toEnum)}`);
    return result;
}