import api from '@requests/server-api';

export function getStock(id) {
    return fetch(api.stockDataUrl(id))
            .then((data) => data.json());
}