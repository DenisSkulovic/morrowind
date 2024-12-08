export interface EntityDisplayOptions {
    title: string;
    defaultSort?: string;
}

export function EntityDisplay(options: EntityDisplayOptions) {
    return function (target: any) {
        Reflect.defineMetadata('entityDisplay', options, target);
    };
} 