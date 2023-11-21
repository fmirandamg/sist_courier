import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrLoginComponent } from './modulo/componentes/cr-login/cr-login.component';
import { CrRecuperarPassComponent } from './modulo/componentes/cr-recuperar-pass/cr-recuperar-pass.component';
import { CrRegistroComponent } from './modulo/componentes/cr-registro/cr-registro.component';
import { AppLayoutComponent } from './layout/app.layout.component';

const routes: Routes = [
  { path: "", component:CrLoginComponent},
  { path: "recpass", component:CrRecuperarPassComponent},
  { path: "registro", component:CrRegistroComponent},
  { path: "dashcli", component: AppLayoutComponent,
     children: [
      { path: "", loadChildren: () => import('./modulo/componentes/cr-dash-cli/cr-dash-cli.module').then(m => m.CrDashCliModule) }
   ]
  },
  { path: "**", component:CrLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
