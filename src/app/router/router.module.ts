import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ListComponent } from '../components/list/list.component';
import { DetailComponent } from '../components/detail/detail.component';
import { EditComponent } from '../components/edit/edit.component';
import { EditUtenteComponent } from '../components/edit-utente/edit-utente.component';
import { LoginComponent } from '../components/login/login.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { AuthguardService } from '../services/authguard.service';
import { AuthguardLoginService } from '../services/login-authguard.service';
import { CanDeactivateEditService } from '../services/can-deactivate-edit.service';
import { CanDeactivateEditUserService } from '../services/can-deactivate-edit-user.service';

const routes: Routes = [
  { path: "app-home", component: HomeComponent, canActivate: [AuthguardService] },
  { path: "app-list", component: ListComponent, canActivate: [AuthguardService] },
  { path: "app-detail/:id", component: DetailComponent, canActivate: [AuthguardService] },
  { path: "app-edit", component: EditComponent, canActivate: [AuthguardService], canDeactivate: [CanDeactivateEditService] },
  { path: "app-edit/:id", component: EditComponent, canActivate: [AuthguardService], canDeactivate: [CanDeactivateEditService] },
  { path: "app-edit-utente/:id", component: EditUtenteComponent, canActivate: [AuthguardService], canDeactivate: [CanDeactivateEditUserService] },
  { path: "login", component: LoginComponent, canActivate: [AuthguardLoginService] },
  { path: "", redirectTo: "/login", pathMatch: "full" },//all'inizio accederà ad home
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class cRouterModule { }
