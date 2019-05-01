import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './app/login/login.component';
import {MainComponent} from './app/main/main.component';
import {LessontabComponent} from './app/lessontab/lessontab.component';
import {RegistertableComponent} from './app/registertable/registertable.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'detail', component: LessontabComponent },
  { path: 'register', component: RegistertableComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
