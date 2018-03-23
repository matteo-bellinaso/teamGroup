import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAdmin: boolean = false;
  user: string;
  constructor(private loginService : LoginService) { 
    if (loginService.isAdmin()) {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }

  logout() {
    this.loginService.logout();
    this.loginService.setLogged(false);
  }
  
  ngOnInit() {
    this.user = sessionStorage.getItem("username");
  }
}
