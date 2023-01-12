import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { GestionarUsuariosComponent } from './gestionar-usuarios/gestionar-usuarios.component';
import { GestionarRolesComponent } from './gestionar-roles/gestionar-roles.component';
import {NbCardModule} from "@nebular/theme";
import {Ng2SmartTableModule} from "ng2-smart-table";


@NgModule({
  declarations: [
    GestionarUsuariosComponent,
    GestionarRolesComponent
  ],
        imports: [
                CommonModule,
                SeguridadRoutingModule,
                NbCardModule,
                Ng2SmartTableModule
        ]
})
export class SeguridadModule { }
