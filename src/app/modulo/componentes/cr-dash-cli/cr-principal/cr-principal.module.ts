import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StyleClassModule } from 'primeng/styleclass';
import { FormsModule } from '@angular/forms';
import { CrPrincipalRoutingModule } from './cr-principal-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CrPrincipalRoutingModule,
    StyleClassModule,
    FormsModule
  ]
})
export class CrPrincipalModule { }
