import { makeAutoObservable, reaction } from "mobx";

class StocksStore {
    constructor() {
        makeAutoObservable(this);
        reaction(() => this.catalogStocks, (v) => {
            this.catalogStocks = Object.values(v.Valute);
        })
    }
    _catalogStocks = {};
    catalogStocks = [];
    userStocks = [];
    setCatalogStocks = (data) => {
        this._catalogStocks = data;
    }
    setCatalogArray = (data) => {
        this.catalogStocks = data;
    }
    setUserStocks = (data) => {
        this.userStocks = Object.values(data.Valute);
    }
}

export default new StocksStore();