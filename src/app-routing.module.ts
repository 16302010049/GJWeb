import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './app/login/login.component';
import {MainComponent} from './app/main/main.component';
import {LessontabComponent} from './app/lessontab/lessontab.component';
import {RegistertableComponent} from './app/registertable/registertable.component';

let routes: Routes = [];

if (localStorage.getItem('teacher')) {
  routes = [
    {path: '', redirectTo: 'main', pathMatch: 'full'},
    {path: 'login', component: MainComponent},
    {path: 'main', component: MainComponent},
    {path: 'detail', component: LessontabComponent},
    {path: 'register', component: RegistertableComponent}
  ];
} else {
  routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'main', component: LoginComponent},
    {path: 'detail', component: LoginComponent},
    {path: 'register', component: RegistertableComponent}
  ];
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
