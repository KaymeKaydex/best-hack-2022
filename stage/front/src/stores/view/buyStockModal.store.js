import { makeAutoObservable } from "mobx";

class BuyStockStore {
    constructor() {makeAutoObservable(this)};
    isOpen = false;
    count = 1;
    incCount = () => this.count++;
    decCount = () => {
        if (this.count > 0)
            this.count--
    };
    close = () => {this.isOpen = false};
    open = () => {this.isOpen = true};
}

export default new BuyStockStore();