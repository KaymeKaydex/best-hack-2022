import { makeAutoObservable, reaction } from "mobx";

class UserStore {
    constructor() {
        makeAutoObservable(this)
        reaction(() => this.isLoggedIn, () => console.log('user is logged out'))
    }
    isLoggedIn = true; // !! - поменять на LocalStorage
    name = 'Ivan';
    surname = 'Petrov';
    balance1 = 123;
    balance2 = 32.12;
    id = '3'; //!!!!
    setUser = (data) => {
        this.name = data.name;
        this.surname = data.surname;
    }
    login = (data) => {
        this.setUser(data);
        this.isLoggedIn = true; // !! - поменять на LocalStorage
    }
    logout = () => {
        this.isLoggedIn = false;
        // !!! удалять вообще всё
    }
}

export default new UserStore();