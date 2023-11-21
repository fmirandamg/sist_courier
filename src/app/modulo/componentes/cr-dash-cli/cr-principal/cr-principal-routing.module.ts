import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrPrincipalComponent } from './cr-principal.component';

const routes: Routes = [
  { path: '', component: CrPrincipalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrPrincipalRoutingModule { }
