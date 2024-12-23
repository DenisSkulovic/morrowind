export const routes = {
    home: () => "/",
    worlds: () => "/worlds",
    userProfile: (accountId: string) => `/account/${accountId}`,
    worldCreate: () => "/worlds/create",
    worldDetail: (world_id: string) => `/worlds/${world_id}`,
    worldEdit: (world_id: string) => `/worlds/${world_id}/edit`,
    contentDashboard: (world_id: string) => `/worlds/${world_id}/content/dashboard`,
    contents: (world_id: string) => `/worlds/${world_id}/content/entities`,
    contentEntity: (world_id: string, entity: string) => `/worlds/${world_id}/content/entities/${entity}`,
    contentDetail: (world_id: string, entity: string, entityId: string) => `/worlds/${world_id}/content/entities/${entity}/${entityId}`,
    contentCreate: (world_id: string, entity: string) => `/worlds/${world_id}/content/entities/${entity}/create`,
    contentEdit: (world_id: string, entity: string, entityId: string) => `/worlds/${world_id}/content/entities/${entity}/${entityId}/edit`,
};
