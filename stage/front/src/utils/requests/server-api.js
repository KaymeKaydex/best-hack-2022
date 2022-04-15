class API {
    BASE_URL = '';
    constructor(url) {
        this.BASE_URL = url; 
    }
    userSignInUrl = () => `${this.BASE_URL}/`;
    userSignUpUrl = () => `${this.BASE_URL}/`;
    userDataUrl = (id) => `${this.BASE_URL}/.../${id}`;
    // userUserStocks = (id) => `${this.BASE_URL}/currencies/scripts/XML_daily.asp`; 
    userStocksUrl = (id) => `https://www.cbr-xml-daily.ru/daily_json.js`;
    // stockDataUrl = (id) => `${this.BASE_URL}/currencies/scripts/XML_dynamic.asp?date_req1=02/03/2001&date_req2=14/03/2001&VAL_NM_RQ=${id}`;
    stockDataUrl = (id) => `https://www.cbr.ru/scripts/XML_dynamic.asp?date_req1=02/03/2001&date_req2=14/03/2001&VAL_NM_RQ=${id}`;
    // CatalogUrl = () => `${this.BASE_URL}/currencies/scripts/XML_daily.asp`;
    catalogUrl = () => `https://www.cbr-xml-daily.ru/daily_json.js`;
}

export function getResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

const host = '192.168.0.1';
const port = '3000';
const url = `${host}/${port}`;

export default new API(url);