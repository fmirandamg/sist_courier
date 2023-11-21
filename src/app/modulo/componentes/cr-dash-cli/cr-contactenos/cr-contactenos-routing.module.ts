import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrContactenosComponent } from './cr-contactenos.component';

const routes: Routes = [
  { path: '', component: CrContactenosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrContactenosRoutingModule { }
