import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrLoginComponent } from './modulo/componentes/cr-login/cr-login.component';
import { CrRecuperarPassComponent } from './modulo/componentes/cr-recuperar-pass/cr-recuperar-pass.component';
import { CrRegistroComponent } from './modulo/componentes/cr-registro/cr-registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from "primeng/dropdown";
import { CalendarModule } from "primeng/calendar";
import { InputTextareaModule } from "primeng/inputtextarea";

import { AppLayoutModule} from './layout/app.layout.module'
import { StyleClassModule } from 'primeng/styleclass';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CrLoginComponent,
    CrRecuperarPassComponent,
    CrRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputTextModule ,
    ButtonModule,
    PasswordModule,
    AppLayoutModule,
    DropdownModule,
    CalendarModule,
    InputTextareaModule,
    StyleClassModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
