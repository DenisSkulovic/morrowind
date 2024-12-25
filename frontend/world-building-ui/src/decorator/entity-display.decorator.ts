import { EntityMetadataKeyEnum } from "../enum/EntityMetadataKeyEnum";
import { ClassConstructor } from "../types";

export interface EntityDisplayOptions {
    title: string;
    defaultSort?: string;
}

export interface EntityDisplayConfig extends EntityDisplayOptions {
    clazz: "EntityDisplayConfig";
}

export function EntityDisplay(options: EntityDisplayOptions) {
    return function (target: ClassConstructor<any>) {
        const config: EntityDisplayConfig = { ...options, clazz: "EntityDisplayConfig" };
        Reflect.defineMetadata(EntityMetadataKeyEnum.ENTITY_DISPLAY, config, target);
    };
}

export const getEntityDisplayConfig = (cls: ClassConstructor<any>): EntityDisplayConfig => {
    const config = Reflect.getMetadata(EntityMetadataKeyEnum.ENTITY_DISPLAY, cls.constructor) || [];
    return config.find((config: EntityDisplayConfig) => config.clazz === "EntityDisplayConfig");
}