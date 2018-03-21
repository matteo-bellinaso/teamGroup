import { Injectable } from '@angular/core';
import { User } from '../class/user';

@Injectable()
export class UserListService {

  constructor() { }

  users : User[] = [
    new User("admin","admin", true),
    new User("utente", "utente"),
    new User("pippo", "pippo"),
    new User("paperino", "paperino"),
    new User("topolino", "topolino")
  ];


getUserByUsername(id : string, pass : string){
  for(let user of this.users){
    if(id == user.username && pass == user.password){
      return user;
    }
  }
  return null;
}

}
