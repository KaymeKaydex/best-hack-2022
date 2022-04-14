import { makeAutoObservable, reaction } from "mobx";

class StocksStore {
    constructor() {
        makeAutoObservable(this);
        reaction(() => this.data.length, () => console.log('Stocks data changed'));
    }
    catalogStocks = [];
    userStocks = [];
}

export default new StocksStore();