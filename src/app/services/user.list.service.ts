import { Injectable } from '@angular/core';
import { User } from '../class/user';

@Injectable()
export class UserListService {

  constructor() { }

  users: User[] = [
    new User("admin", "admin", true, 'admin@admin.it', 'carlo', 'braghieri', new Date('11/06/1994'), "cotolengo", true),
    new User("utente", "utente", false, 'carlo@cazzi.it', 'carlone', 'braghieri', new Date('09/06/1991'), "cotolengo", true),
    new User("pippo", "pippo", false, 'chube@millenium.it', 'simone', 'chewbecca', new Date('11/06/1986'), "dagobaa", false),
    new User("paperino", "paperino", false, 'olio@cuore.it', 'digerisci', 'bene', new Date('11/06/1989'), "ravioli", true),
    new User("topolino", "topolino", false, 'fr@rgegre.it', 'carletto', 'baretto', new Date('09/06/1991'), "borgonovo", true)
  ];

  checkUserProfile(username: string, pass: string, inLogin: boolean = true) { //controlla mail o username
    let indice: number = 0;
    for (let user of this.users) {
      if (username == user.username || username == user.email) {
        if (inLogin) {
          return this.getUserProfile(pass, indice);
        } else {
          return this.getUserProfileWithoutPassword(indice);
        }
      }
      indice = indice + 1;
    }
  }

  getUserProfile(pass: string, indice: number) {
    let user = this.users[indice];
    if (pass == user.password) {
      return user;
    }
    return null;
  }

  getUserProfileWithoutPassword(indice: number) {
    return this.users[indice];
  }


  isChanged(user: User) {

    let id = user.username;
    let user2 = this.checkUserProfile(user.username, "");
    if (!this.isEquivalent(user, user2)) {
      return true;
    } else {
      return false;
    }

  }

  isEquivalent(a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
      return false;
    }

    for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i];

      // If values of same property are not equal,
      // objects are not equivalent
      if (propName != "birthDate") {
        if (a[propName] !== b[propName]) {
          return false;
        }
      } else {
        if (a[propName].getTime() !== b[propName].getTime()) {
          return false;
        }
      }

    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
  }

  editUserProfile(userPassed: User) { //solo admin
    for (let user of this.users) {
      if (user.username == userPassed.username) {
        user.changeValues(userPassed);
      }
    }
  }

}