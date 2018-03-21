import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ListComponent } from '../components/list/list.component';
import { DetailComponent } from '../components/detail/detail.component';
import { EditComponent } from '../components/edit/edit.component';
import { LoginComponent } from '../components/login/login.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "list", component: ListComponent},
  {path: "detail/:id", component: DetailComponent},
  {path: "edit", component: EditComponent},
  {path: "edit/:id", component: EditComponent},
  {path: "login", component: LoginComponent}
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
