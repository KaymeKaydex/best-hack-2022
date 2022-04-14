import { makeAutoObservable } from "mobx";

class InvestmentStore {
    constructor() {makeAutoObservable(this)};
    initialAmount = 100000;
    setInitialAmount = (v) => this.initialAmount = 100000 + (v / 100) * 100000; 
    replenishment = 10000;
    setReplenishment = (v) => this.replenishment = 10000 + (v / 100) * 10000;
    time = 1;
    setTime = (v) => this.time = 1 + (v / 100) * 20;
    income = 10000;
    setIncome = (v) => this.income = 10000 + (v / 100) * 10000; 
}

export default new InvestmentStore();