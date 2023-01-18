import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilUsuarioRoutingModule } from './perfil-usuario-routing.module';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import {NbButtonModule, NbCardModule, NbInputModule, NbTabsetModule} from '@nebular/theme';


@NgModule({
  declarations: [
    PerfilUsuarioComponent,
  ],
  imports: [
    CommonModule,
    PerfilUsuarioRoutingModule,
    NbTabsetModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
  ],
})
export class PerfilUsuarioModule { }
