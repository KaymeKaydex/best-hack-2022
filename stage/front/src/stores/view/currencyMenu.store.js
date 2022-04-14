import { makeAutoObservable, reaction } from "mobx";

const countries = [
    {title: 'Российский рубль', ticker: 'RUB', code: 'RU'},
    {title: 'Доллар США', ticker: 'USD', code: 'US'},
    {title: 'Евро', ticker: 'EUR', code: 'EU'},
    {title: 'Фунт стерлингов', ticker: 'GBP', code: 'GB'},
    {title: 'Японская йена', ticker: 'JPY', code: 'JP'},
];

class CurrencyMenuStore {
    constructor() {
        makeAutoObservable(this);
        reaction(() => this.amount, () => this.toPacks = this.amount + 3); ///!!!! Конвертация
    }
    el = null;
    amount = 0;
    toPacks = 0;
    countryId = 0;
    setAmount = (v) => {this.amount = parseFloat(v)}
    setCountry = (v) => {this.countryId = v}
    getCurrentCountry = () => countries[this.countryId];
    closeMenu = () => {this.el = null};
    openMenu = (curTarget) => {this.el = curTarget}; 
}

export default new CurrencyMenuStore();