import {  Injectable, EventEmitter } from "@angular/core";
import { CounterService } from "./counter.service";


@Injectable()
export class UserService {
   public activeUsers = ['Max', 'Anna'];
  public inactiveUsers = ['Chris', 'Manu'];
  
    constructor(private counterService: CounterService){

    }

    // userSetToInactive = new EventEmitter<number>();
    onSetToActive(id: number) {
      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id, 1);
      this.counterService.inactiveToActive();
    }
    
  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.activeToInactive();
  }

}