import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  username: string;
  password: string;


  tryLog(){
    this.loginService.login(this.username, this.password);
  }
}
