
import { makeAutoObservable } from 'mobx';

class StockPageStore {
    constructor() {makeAutoObservable(this)}
    isLoaded = false;
    loaded = () => {this.isLoaded = true};
    isEnteringForm = true;
    isPendingResponse = false;
    isSuccessfulPayment = false;
    wasSendResponse = () => {
        this.isEnteringForm = false;
        this.isPendingResponse = true;
    }
    gotResponse = (v) => {
        this.isPendingResponse = false;
        this.isSuccessfulPayment = v;
    }
}

export default new StockPageStore();