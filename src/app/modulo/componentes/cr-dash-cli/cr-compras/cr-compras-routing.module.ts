import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrComprasComponent } from './cr-compras.component';

const routes: Routes = [
  { path: '', component: CrComprasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrComprasRoutingModule { }
