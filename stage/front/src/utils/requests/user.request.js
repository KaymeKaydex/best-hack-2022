import { getResponse, API } from './server-api';

export async function getTodos() {
    try {
        const res = await fetch(API.BASE_URL);
        const data = await getResponse(res);
        return data;
    } catch (e) {
        throw new Error(e);
    }
}
