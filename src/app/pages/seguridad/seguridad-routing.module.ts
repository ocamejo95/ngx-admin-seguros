import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GestionarUsuariosComponent} from './gestionar-usuarios/gestionar-usuarios.component';
import {GestionarRolesComponent} from './gestionar-roles/gestionar-roles.component';

const routes: Routes = [
  {path: 'manage-users', component: GestionarUsuariosComponent},
  {path: 'manage-roles', component: GestionarRolesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguridadRoutingModule {
}
