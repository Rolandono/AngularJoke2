import {  NavBarComponent } from './nav-bar/nav-bar.component';
import {  ListComponent } from './list/list.component';
import {  LoginComponent } from './login/login.component';
import {  SingleJokeComponent } from './single-joke/single-joke.component';
import {  NewJokeComponent } from './new-joke/new-joke.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'list', component: ListComponent },
    { path: 'login', component: LoginComponent},
    { path: 'list/:id', component: SingleJokeComponent},
    { path: 'newJoke', component: NewJokeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NavBarComponent, ListComponent];