import api, { getResponse} from './server-api';
import jwtStore from '@domain/jwt.store';

export function getCatalog() {
    return fetch(api.catalogUrl())
        .then(res => getResponse(res))
}

export async function getUserStocks(id) {
    const res = await fetch(api.userStocksUrl(id));
    const data = await getResponse(res);
    return data;
}