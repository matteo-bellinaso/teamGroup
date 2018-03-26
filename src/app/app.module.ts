import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditComponent } from './components/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { ListVideogameService } from './services/list-videogame.service';
import { ListGeneresService } from './services/list-generes.service';
import { cRouterModule } from './router/router.module';
import { UserListService } from './services/user.list.service';
import { AuthguardService } from './services/authguard.service';
import { AuthguardLoginService } from './services/login-authguard.service';
import { CanDeactivateEditService } from './services/can-deactivate-edit.service';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailComponent,
    HomeComponent,
    ListComponent,
    LoginComponent,
    PageNotFoundComponent,
    EditComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    cRouterModule,
    ReactiveFormsModule
  ],
  providers: [LoginService,UserListService,  
  ListGeneresService,ListVideogameService,AuthguardService,AuthguardLoginService,CanDeactivateEditService],
   
   bootstrap: [AppComponent]
})
export class AppModule { }
