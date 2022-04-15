import { makeAutoObservable, reaction } from "mobx";
import { getCatalog, getUserStocks } from "../../utils/requests/catalog.request";

class StocksStore {
    constructor() {
        makeAutoObservable(this);
        reaction(() => this._catalogStocks, (v) => {
            this.setCatalogArray(Object.values(v.Valute));
        })
    }
    _catalogStocks = {};
    catalogStocks = [];
    userStocks = [];
    loadCatalog = () => {
        getCatalog()
            .then(data => this.setCatalogStocks(data))
            .catch(err => {throw new Error(err)});
    }
    loadUserStocks = (id) => {
        getUserStocks(id)
            .then(data => this.setUserStocks(data))
            .catch(err => {throw new Error(err)});
    }
    setCatalogStocks = (data) => {
        this._catalogStocks = data;
    }
    setCatalogArray = (v) => {
        this.catalogStocks = v; 
    }
    filterCatalogStocks = (substr) => {
        const filteredStocksByName = [];
        for (let key in this._catalogStocks.Valute)
            if (this._catalogStocks.Valute[key].Name.includes(substr))
                filteredStocksByName.push(this._catalogStocks.Valute[key]);
        this.catalogStocks = filteredStocksByName;
    }
    setUserStocks = (data) => {
        this.userStocks = Object.values(data.Valute);
    }
}

export default new StocksStore();