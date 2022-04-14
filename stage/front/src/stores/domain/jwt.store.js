import { makeAutoObservable } from "mobx";

class JWTStore {
    constructor() {makeAutoObservable(this)};
    jwt = '';
    setJWT = (jwt) => this.jwt = jwt;
    getHeader = () => `Bearer ${this.jwt}`;
}

export default new JWTStore();