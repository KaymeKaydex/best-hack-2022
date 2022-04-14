import { makeAutoObservable } from "mobx";
class PaymentOperationStore {
    constructor() {makeAutoObservable(this)};
    onPaymentPage = false;
    openPaymentPage = () => this.onPaymentPage = true;
    closePaymentPage = () => this.onPaymentPage = false;
}

export default new PaymentOperationStore();
