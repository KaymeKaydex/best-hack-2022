import { makeAutoObservable } from 'mobx';
import { getStock } from '@requests/stock.request';

class StockPageStore {
    constructor() {makeAutoObservable(this)}
    // isLoaded = false;
    isLoaded = true;
    loaded = () => {this.isLoaded = true};
    isEnteringForm = true;
    isPendingResponse = false;
    isSuccessfulPayment = false;
    wasSendResponse = () => {
        this.isEnteringForm = false;
        this.isPendingResponse = true;
    }
    charCode = "AMD"
    id = "R01060"
    name = "Армянских драмов"
    nominal = 100
    numCode = 51
    previous = 16.9014
    value = 17.2399
    loadStock = (id) => {
        // this.wasSendResponse();
        // getStock(id)
        //     .then((data) => {
        //         this.name = data.Name;
        //         this.name = data.Name;
        //         this.gotResponse(true);
        //     })
        //     .catch(() => this.gotResponse(false));
    }
    gotResponse = (v) => {
        this.isPendingResponse = false;
        this.isSuccessfulPayment = v;
    }
}

export default new StockPageStore();