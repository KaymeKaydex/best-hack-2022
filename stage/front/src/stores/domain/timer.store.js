import { makeAutoObservable, reaction } from "mobx";
class TimerStore {
    constructor() {
        makeAutoObservable(this);
        reaction(() => this.time, () => console.log(this.time));
    }
    isTimerBegun = false;
    time = 0;
    setTime = (seconds) => {
        this.time = seconds;
    }
    decTime = () => this.time--;
    startTimer = (seconds, step, callback) => {
        this.isTimerBegun = true;
        this.setTime(seconds);
        const timerId = setInterval(this.decTime, step * 1000);
        return setTimeout(() => {
            this.isTimerBegun = false;
            clearInterval(timerId);
            callback();
        }, seconds * 1000);
    }
}

export default new TimerStore();
