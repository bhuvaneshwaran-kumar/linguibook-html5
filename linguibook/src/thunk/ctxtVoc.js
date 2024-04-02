import { axiosWithAuthToken as authAxios } from "../utils/interceptors"

export const getContextDetials = async () => {
    const resp = await authAxios.get('/api/project/getContext');
    const { activeContextId, contextData } = resp.data.data;
    return { activeContextId, contextData }
}

export const getVocDetials = async (contextId, from = 0, to = 20) => {
    const resp = await authAxios.post(`/api/project/getVoc`, { contextId, from, to });
    const { vocabularies } = resp.data.data;
    return { vocabularies };
}