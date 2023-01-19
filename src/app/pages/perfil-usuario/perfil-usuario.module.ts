import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilUsuarioRoutingModule } from './perfil-usuario-routing.module';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import {NbButtonModule, NbCardModule, NbInputModule, NbTabsetModule} from '@nebular/theme';
import {ReactiveFormsModule} from "@angular/forms";


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
                ReactiveFormsModule,
        ],
})
export class PerfilUsuarioModule { }
