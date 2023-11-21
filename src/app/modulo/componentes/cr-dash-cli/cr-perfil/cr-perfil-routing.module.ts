import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrPerfilComponent } from './cr-perfil.component';

const routes: Routes = [
  { path: '', component: CrPerfilComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrPerfilRoutingModule { }
