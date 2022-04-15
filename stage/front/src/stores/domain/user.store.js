import { makeAutoObservable, reaction } from "mobx";

class UserStore {
    constructor() {
        makeAutoObservable(this)
        reaction(() => this.isLoggedIn, (v) => {
            if (v === false)
                localStorage.clear();
            else 
                localStorage.setItem('isLoggedIn', true)
        })
        reaction(() => this.name, () => localStorage.setItem('name', this.name))
        reaction(() => this.surname, () => localStorage.setItem('surname', this.surname))
        reaction(() => this.cards, () => localStorage.setItem('cards', this.cards))
        reaction(() => this.packs, () => localStorage.setItem('packs', this.packs))
        reaction(() => this.id, () => localStorage.setItem('id', this.id))
    }
    isLoggedIn = localStorage.getItem('isLoggedIn') || false;
    name = localStorage.getItem('name') || '';
    surname = localStorage.getItem('surname') || '';
    cards = parseInt(localStorage.getItem('cards')) || 0;
    packs = parseInt(localStorage.getItem('packs')) || 0;
    addPacks = (amount) => this.packs += amount;
    id = localStorage.getItem('id') || 0;
    setUser = (data) => {
        this.name = data.name;
        this.surname = data.surname;
        this.cards = data.cards;
        this.packs = data.packs;
        this.id = data.id;
    }
    login = (data) => {
        this.setUser(data);
        this.isLoggedIn = true;
    }
    logout = () => {
        this.isLoggedIn = false;
    }
}

export default new UserStore();