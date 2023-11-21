import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", data: { breadcrumb: 'Principal' }, loadChildren: () => import('./cr-principal/cr-principal.module').then(m => m.CrPrincipalModule) },
  { path: "principal", data: { breadcrumb: 'Principal' }, loadChildren: () => import('./cr-principal/cr-principal.module').then(m => m.CrPrincipalModule) },
  { path: "compras", data: { breadcrumb: 'Compras' }, loadChildren: () => import('./cr-compras/cr-compras.module').then(m => m.CrComprasModule) },
  { path: "seguimiento", data: { breadcrumb: 'Seguimiento' }, loadChildren: () => import('./cr-seguimiento/cr-seguimiento.module').then(m => m.CrSeguimientoModule) },
  { path: "perfil", data: { breadcrumb: 'Perfil Cliente' }, loadChildren: () => import('./cr-perfil/cr-perfil.module').then(m => m.CrPerfilModule) },
  { path: "actpassword", data: { breadcrumb: 'Actualiza Password' }, loadChildren: () => import('./cr-act-password/cr-act-password.module').then(m => m.CrActPasswordModule) },
  { path: "contactenos", data: { breadcrumb: 'Contactenos' }, loadChildren: () => import('./cr-contactenos/cr-contactenos.module').then(m => m.CrContactenosModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrDashCliRoutingModule { }
