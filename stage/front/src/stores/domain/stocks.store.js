import { makeAutoObservable, reaction } from "mobx";

class StocksStore {
    constructor() {
        makeAutoObservable(this);
        reaction(() => this.data.length, () => console.log('Stocks data changed'));
    }
    catalogStocks = [];
    userStocks = [];
    setCatalogStocks = (data) => {
        this.catalogStocks = Object.values(data.Valute);
    }
    setUserStocks = (data) => {
        this.userStocks = Object.values(data.Valute);
    }
}

export default new StocksStore();