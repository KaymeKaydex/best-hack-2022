import { makeAutoObservable, reaction } from "mobx";

class AccountMenuStore {
    accountButtonEl = null;
    closeMenu = () => {this.accountButtonEl = null};
    openMenu = (curTarget) => {this.accountButtonEl = curTarget}; 
    constructor() {
        makeAutoObservable(this);
    }
}

export default new AccountMenuStore();