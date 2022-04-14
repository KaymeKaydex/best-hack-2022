import { makeAutoObservable } from "mobx";

class OpenBrockageModalStore {
    constructor() {makeAutoObservable(this)};
    isOpen = false;
    close = () => {this.isOpen = false};
    open = () => {this.isOpen = true};
}
export default new OpenBrockageModalStore();