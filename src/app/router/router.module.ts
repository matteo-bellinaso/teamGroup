import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ListComponent } from '../components/list/list.component';
import { DetailComponent } from '../components/detail/detail.component';
import { EditComponent } from '../components/edit/edit.component';
import { LoginComponent } from '../components/login/login.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { AuthguardService } from '../services/authguard.service';

const routes: Routes = [
  {path: "app-home", component: HomeComponent,canActivate: [AuthguardService]},
  {path: "app-list", component: ListComponent, canActivate: [AuthguardService]},
  {path: "app-detail/:id", component: DetailComponent, canActivate: [AuthguardService]},
  {path: "app-edit", component: EditComponent,canActivate: [AuthguardService]},
  {path: "app-edit/:id", component: EditComponent,canActivate: [AuthguardService]},
  {path: "login", component: LoginComponent},
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
