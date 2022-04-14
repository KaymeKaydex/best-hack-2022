class API {
    BASE_URL = 'https://jsonplaceholder.typicode.com';
    constructor() {}
    userLogInUrl = () => {
        return `${this.serverAddress}/log-in`;
    }
}

export function getResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);    
}

export default new API();