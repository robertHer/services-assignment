

export class CounterService {
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;


    activeToInactive(){
        this.activeToInactiveCounter++; 
    };

    inactiveToActive(){
        this.inactiveToActiveCounter++;
    }

}