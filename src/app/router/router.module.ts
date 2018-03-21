import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ListComponent } from '../components/list/list.component';
import { DetailComponent } from '../components/detail/detail.component';
import { EditComponent } from '../components/edit/edit.component';
import { LoginComponent } from '../components/login/login.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "app-home", component: HomeComponent},
  {path: "app-list", component: ListComponent},
  {path: "app-detail/:id", component: DetailComponent},
  {path: "app-edit", component: EditComponent},
  {path: "app-edit/:id", component: EditComponent},
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
