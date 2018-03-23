import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { UserListService } from './user.list.service';
import { User } from '../class/user';
import { Routes, Router } from '@angular/router';

@Injectable()
export class LoginService {

  utente: User;
  constructor(private userListService: UserListService, private route: Router) {

  }

  private logged: Subject<boolean> = new Subject<boolean>();
  public logged$ = this.logged.asObservable();

  setLogged(value: boolean) {
    this.logged.next(value);
  }

  isLogged() {
    if (sessionStorage.getItem('username') != null) {
      this.setLogged(true);
      return true;
    } else {
      this.setLogged(false);
      return false;
    }
  }

  login(username: string, password: string) {
    if (username != null && username != '' && password != null && password != '') {


      this.utente = this.userListService.checkUserProfile(username, password);
      sessionStorage.setItem("username", this.utente.username);
      this.setLogged(true);
      this.route.navigate(['/app-home']);

    }
  }

  isAdmin() {
    if (sessionStorage.getItem('username') === 'admin') {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    sessionStorage.removeItem('username');
    this.route.navigate(["/login"]);

  }

}
