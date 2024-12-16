export const routes = {
    home: () => "/",
    worlds: () => "/worlds",
    userProfile: (accountId: string) => `/account/${accountId}`,
    worldCreate: () => "/worlds/create",
    worldDetail: (id: string) => `/worlds/${id}`,
    worldEdit: (id: string) => `/worlds/${id}/edit`,
    contentDashboard: (id: string) => `/worlds/${id}/content/dashboard`,
    contents: (id: string) => `/worlds/${id}/content/entities`,
    contentEntity: (id: string, entity: string) => `/worlds/${id}/content/entities/${entity}`,
    contentDetail: (id: string, entity: string, entityId: string) => `/worlds/${id}/content/entities/${entity}/${entityId}`,
    contentCreate: (id: string, entity: string) => `/worlds/${id}/content/entities/${entity}/create`,
    contentEdit: (id: string, entity: string, entityId: string) => `/worlds/${id}/content/entities/${entity}/${entityId}/edit`,
};
