import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrDashCliRoutingModule } from './cr-dash-cli-routing.module';
import { CrPerfilComponent } from './cr-perfil/cr-perfil.component';
import { CrContactenosComponent } from './cr-contactenos/cr-contactenos.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PasswordModule } from 'primeng/password';


@NgModule({
  imports: [
    CommonModule,
    CrDashCliRoutingModule,
    ButtonModule,
    DropdownModule,
    CalendarModule,
    InputTextModule,
    InputTextareaModule,
    PasswordModule
  ],
  declarations: [
    CrPerfilComponent,
    CrContactenosComponent
  ]
})
export class CrDashCliModule { }
