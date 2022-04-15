import { makeAutoObservable, reaction } from "mobx";

function convert(value, ticker) {
    let res = 0;
    switch (ticker) {
        case 'RUB':
            res = value * 1
            break;
        case 'USD':
            res = value * 80
            break;
        case 'EUR':
            res = value * 90
            break;
        case 'GBP':
            res = value * 30
            break;
        case 'JPY':
            res = value * 0.3
            break;
        default:
            break;
    }
    return res;
}

export const countries = [
    {title: 'Российский рубль', ticker: 'RUB', code: 'RU'},
    {title: 'Доллар США', ticker: 'USD', code: 'US'},
    {title: 'Евро', ticker: 'EUR', code: 'EU'},
    {title: 'Фунт стерлингов', ticker: 'GBP', code: 'GB'},
    {title: 'Японская йена', ticker: 'JPY', code: 'JP'},
];

class CurrencyMenuStore {
    constructor() {
        makeAutoObservable(this);
        reaction(() => [this.amount, this.countryId], () => {
            this.toPacks = convert(
                this.amount, countries[this.countryId].ticker,
            )
        });
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