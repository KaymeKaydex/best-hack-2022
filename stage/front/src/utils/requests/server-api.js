import config from "config";

class API {
    BASE_URL = '';
    constructor(url) {
        this.BASE_URL = url; 
    }
    userSignInUrl = () => `${this.BASE_URL}/`;
    userSignUpUrl = () => `${this.BASE_URL}/`;
    UserDataUrl = (id) => `${this.BASE_URL}/.../${id}`;
    StockDataUrl = (id) => `${this.BASE_URL}/currencies/qwdqw/${id}`;
    CatalogUrl = () => `${this.BASE_URL}/currencies/scripts/XML_daily.asp`;
    // CatalogUrl = () => `${this.BASE_URL}/scripts/XML_daily.asp`;
}

export function getResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

const url = `${config.get('host')}/${config.get('port')}`;

export default new API(url);