import { Injectable } from '@angular/core';
import { User } from '../class/user';

@Injectable()
export class UserListService {

  constructor() { }

  users : User[] = [
    new User("admin","admin", true, 'admin@admin.it', 'carlo', 'braghieri', new Date('11/06/1994'), "cotolengo", true),
    new User("utente", "utente",  false, 'carlo@cazzi.it', 'carlone', 'braghieri', new Date('09/06/1991'), "cotolengo", true),
    new User("pippo", "pippo",  false, 'chube@millenium.it', 'simone', 'chewbecca', new Date('11/06/1986'), "dagobaa", false),
    new User("paperino", "paperino",  false, 'olio@cuore.it', 'digerisci', 'bene', new Date('11/06/1989'), "ravioli", true),
    new User("topolino", "topolino",  false, 'fr@rgegre.it', 'carletto', 'baretto', new Date('09/06/1991'), "borgonovo", true)
  ];

  checkUserProfile(username : string, pass : string){ 
   let indice : number = 0;
    for(let user of this.users){
      if(username == user.username || username== user.email){
        return this.getUserProfile(pass , indice);
      }
      indice = indice +1;
    }
  }


getUserProfile( pass : string, indice : number){ 
  let user = this.users[indice];
    if( pass == user.password){
      return user;
    }
  return null;
}


editUserProfile(){ //solo admin

}
}
