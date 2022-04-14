import { makeAutoObservable } from "mobx";

class SpectatorStore {
    constructor() {makeAutoObservable(this)}
    isSignModalOpen = false;
    isSignInWindowOpen = true;
    isSignUpWindowOpen = false;
    toggleIsSignModalOpen = () => {
        this.isSignModalOpen = !this.isSignModalOpen;
    }
    setIsSignInWindowOpen = (v) => {
        this.isSignInWindowOpen = v;
    }
    setIsSignUpWindowOpen = (v) => {
        this.isSignUpWindowOpen = v;
    }
    openSignInForm = () => {
        this.setIsSignInWindowOpen(true);
        this.setIsSignUpWindowOpen(false);
    }
    openSignUpForm = () => {
        this.setIsSignUpWindowOpen(true);
        this.setIsSignInWindowOpen(false);
    }
    isPendingResponse = false; // Ожидание ответа от сервера на регистрацию 
}

export default new SpectatorStore();