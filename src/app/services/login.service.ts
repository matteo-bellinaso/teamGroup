import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { UserListService } from './user.list.service';
import { User } from '../class/user';
import { Routes, Router } from '@angular/router';

@Injectable()
export class LoginService {

  utente: User;
  constructor(private userListService: UserListService, private route : Router) { }

  private logged: Subject<boolean> = new Subject<boolean>();
  public logged$ = this.logged.asObservable();

  setLogged(value: boolean) {
    this.logged.next(value);
  }

  isLogged(){
    if(sessionStorage.getItem('username') != null){
      return true;
    }else{
      return false;
    }
  }

  login(username: string, password: string) {
    if (username != null && username != null && password != null && password != null) {

      this.utente = this.userListService.getUserByUsername(username, password);

      sessionStorage.setItem("username" ,this.utente.username);
      this.setLogged(true);

      this.route.navigate(['/home']);

    }else{
      alert("username or password sbagliata");
    }
  }

isAdmin(){
  if(sessionStorage.getItem('username') === 'admin'){
    return true;
  }else{
    return false;
  }
}

}