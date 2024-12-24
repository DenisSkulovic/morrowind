export const PAGE_MODE_PARAM = 'mode';
export enum PageModeEnum {
    VIEW = 'view',
    EDIT = 'edit'
}

export const routes = {
    home: () => "/",
    worlds: () => "/worlds",
    userProfile: (accountId: string) => `/account/${accountId}`,
    worldCreate: () => "/worlds/create",
    worldDetail: (world_id: string) => `/worlds/${world_id}`,
    worldEdit: (world_id: string) => `/worlds/${world_id}/edit`,
    worldDashboard: (world_id: string) => `/worlds/${world_id}/content/dashboard`,
    contents: (world_id: string) => `/worlds/${world_id}/content/entities`,
    contentEntity: (world_id: string, entity: string) => `/worlds/${world_id}/content/entities/${entity}`,
    contentDetail: (world_id: string, entity: string, entityId: string, mode?: PageModeEnum) => `/worlds/${world_id}/content/entities/${entity}/${entityId}${mode ? `?${PAGE_MODE_PARAM}=${mode}` : ''}`,
    contentCreate: (world_id: string, entity: string) => `/worlds/${world_id}/content/entities/${entity}/create`,
    contentEdit: (world_id: string, entity: string, entityId: string) => `/worlds/${world_id}/content/entities/${entity}/${entityId}/edit`,
    generatorCharacter: (world_id: string) => `/worlds/${world_id}/content/generator/character`,
    generatorItem: (world_id: string) => `/worlds/${world_id}/content/generator/item`,
    generatorGroup: (world_id: string) => `/worlds/${world_id}/content/generator/group`,
};
