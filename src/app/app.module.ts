import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './shared/material.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DietPageComponent } from './components/diet-page/diet-page.component';
import { TraningPageComponent } from './components/traning-page/traning-page.component'

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    DietPageComponent,
    TraningPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
