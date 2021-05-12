import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { NewJokeComponent } from './new-joke/new-joke.component';
import { SingleJokeComponent } from './single-joke/single-joke.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    NewJokeComponent,
    SingleJokeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
