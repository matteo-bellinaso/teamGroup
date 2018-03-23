import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
logged : boolean = false;

constructor(private loginService : LoginService){

  this.loginService.logged$.subscribe(logged =>{
    this.logged = logged;
  } )

}

}
