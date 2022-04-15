import { makeAutoObservable, reaction } from "mobx";

export const INDUSTRY = 'industry';
export const COUNTRY = 'country';
export const DIFFERENCE = 'difference';
export const PRICE = 'price';

function switchIdReaction() {
    this.closeMenu();
}

export const PriceMenuItemNames = [
    'Цена акции',
    "По возрастнию",
    "По убыванию",
]

export const IndustryMenuItemNames = [
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

export const CountryMenuItemNames = [
    'Все',
    'Российские',
    'Иностранные',
];

export const DifferenceMenuItemNames = [
    'Изменения за день',
    'По возрастанию',
    'По убыванию',
];

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
            case INDUSTRY:
                this.setIndustryButtonEl(curTarget);
                break;
            case COUNTRY:
                this.setCountryButtonEl(curTarget);
                break;
            case DIFFERENCE:
                this.setDifferenceButtonEl(curTarget);
                break;
            case PRICE:
                this.setPriceButtonEl(curTarget);
                break;
            default:
                throw new Error('error.');
        }
    }
    switchSelectedByName = (name, index) => {
        switch (name) {
            case INDUSTRY:
                this.industrySelectedId = index;
                break;
            case COUNTRY:
                this.countrySelectedId = index;
                break;
            case DIFFERENCE:
                this.differenceSelectedId = index;
                break;
            case PRICE:
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

export const menuItemsNames = {
    [INDUSTRY]: IndustryMenuItemNames,
    [COUNTRY]: CountryMenuItemNames,
    [DIFFERENCE]: DifferenceMenuItemNames,
    [PRICE]: PriceMenuItemNames,
}