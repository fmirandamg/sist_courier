import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrActPasswordComponent } from './cr-act-password.component';

const routes: Routes = [
  { path: '', component: CrActPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrActPasswordRoutingModule { }
