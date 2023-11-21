import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrSeguimientoComponent } from './cr-seguimiento.component';

const routes: Routes = [
  { path: '', component: CrSeguimientoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrSeguimientoRoutingModule { }
