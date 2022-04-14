import { getResponse, API } from './server-api';

export async function getCatalog() {
    try {
        const res = await fetch(API.CatalogUrl);
        const data = await getResponse(res);
        return data;
    } catch (e) {
        throw new Error(e);
    }
}