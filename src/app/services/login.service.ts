import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoginService {

  constructor() { }

  private logged: Subject<boolean> = new Subject<boolean>();
  public logged$ = this.logged.asObservable();

  setLogged(value: boolean){
    this.logged.next(value);
  }

  

}
