import { EntityMetadataKeyEnum } from "../enum/EntityMetadataKeyEnum";

export interface EntityDisplayOptions {
    title: string;
    defaultSort?: string;
}

export interface EntityDisplayConfig extends EntityDisplayOptions {
    clazz: "EntityDisplayConfig";
}

export function EntityDisplay(options: EntityDisplayOptions) {
    return function (target: any) {
        const config: EntityDisplayConfig = { ...options, clazz: "EntityDisplayConfig" };
        Reflect.defineMetadata(EntityMetadataKeyEnum.ENTITY_DISPLAY, config, target);
    };
}

export const getEntityDisplayConfig = (target: any): EntityDisplayConfig => {
    const config = Reflect.getMetadata(EntityMetadataKeyEnum.ENTITY_DISPLAY, target.constructor) || [];
    return config.find((config: EntityDisplayConfig) => config.clazz === "EntityDisplayConfig");
}