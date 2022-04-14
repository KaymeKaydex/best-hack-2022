import { makeAutoObservable, reaction } from "mobx";

function switchIdReaction() {
    this.closeMenu();
}

class StockMenuStore {
    constructor() {
        makeAutoObservable(this);
        reaction(() => [
            this.countrySelectedId,
            this.industrySelectedId,
            this.differenceSelectedId,
            this.priceSelectedId,
        ], switchIdReaction.bind(this));
    }
    isLoaded = false;
    loaded = () => {this.isLoaded = true};

    countryButtonEl = null;
    countrySelectedId = 0;
    setCountryButtonEl = (el) => {this.countryButtonEl = el};
    closeCountryMenu = () => {this.countryButtonEl = null};

    industryButtonEl = null;
    industrySelectedId = 0;
    setIndustryButtonEl = (el) => {this.industryButtonEl = el};
    closeIndustryMenu = () => {this.industryButtonEl = null};

    differenceButtonEl = null;
    differenceSelectedId = 0;
    setDifferenceButtonEl = (el) => {this.differenceButtonEl = el};
    closeDifferenceMenu = () => {this.differenceButtonEl = null};
    
    priceButtonEl = null;
    priceSelectedId = 0;
    setPriceButtonEl = (el) => {this.priceButtonEl = el};
    closePriceMenu = () => {this.priceButtonEl = null};

    openMenu = (curTarget) => {
        switch (curTarget.name) {
            case 'industry':
                this.setIndustryButtonEl(curTarget);
                break;
            case 'country':
                this.setCountryButtonEl(curTarget);
                break;
            case 'difference':
                this.setDifferenceButtonEl(curTarget);
                break;
            case 'price':
                this.setPriceButtonEl(curTarget);
                break;
            default:
                throw new Error('error.');
        }
    }
    switchSelectedByName = (name, index) => {
        switch (name) {
            case 'industry':
                this.industrySelectedId = index;
                break;
            case 'country':
                this.countrySelectedId = index;
                break;
            case 'difference':
                this.differenceSelectedId = index;
                break;
            case 'price':
                this.priceSelectedId = index;
                break;
            default:
                throw new Error('error.');
        }
    }
    closeMenu = () => {
        this.setIndustryButtonEl(null);
        this.setCountryButtonEl(null);
        this.setDifferenceButtonEl(null);
        this.setPriceButtonEl(null);
    }
}

export default new StockMenuStore();

const PriceMenuItemNames = [
    'Цена акции',
    'Цена за лот',
    "По возрастнию",
    "По убыванию",
]

const IndustryMenuItemNames = [
    'Любой отрасли',
    'Другое',
    'Здравоохранение',
    'Зеленая энергетика',
    'Информационные технологии',
    'Материалы для эко-технологии',
    'Машиностроение и транспорт',
    'Недвижимость',
    'Потребительские товары и услуги',
    'Сырьевая промышленность',
    'Телекоммуникации',
    'Финансовый сектор',
    'Электротранспорт и комплектующие',
    'Электроэнергетика',
    'Энергетика',
    'Энергеэффективные здания',
]

const CountryMenuItemNames = [
    'Все',
    'Российские',
    'Иностранные',
];

const DifferenceMenuItemNames = [
    'Изменения за день',
    'Доходность за полгода',
    'По возрастанию',
    'По убыванию',
];

export const INDUSTRY = 'industry';
export const COUNTRY = 'country';
export const DIFFERENCE = 'difference';
export const PRICE = 'price';

export const menuItemsNames = {
    [INDUSTRY]: IndustryMenuItemNames,
    [COUNTRY]: CountryMenuItemNames,
    [DIFFERENCE]: DifferenceMenuItemNames,
    [PRICE]: PriceMenuItemNames,
}