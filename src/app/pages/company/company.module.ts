import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CompanyRoutingModule} from './company-routing.module';
import { Indicador1Component } from './indicador1/indicador1.component';
import { Indicador2Component } from './indicador2/indicador2.component';
import { Indicador3Component } from './indicador3/indicador3.component';
import {NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule} from '@nebular/theme';
import {ThemeModule} from '../../@theme/theme.module';
import {TablesRoutingModule} from '../tables/tables-routing.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { Indicador4Component } from './indicador4/indicador4.component';
import { Indicador5Component } from './indicador5/indicador5.component';


@NgModule({
  declarations: [
    Indicador1Component,
    Indicador2Component,
    Indicador3Component,
    Indicador4Component,
    Indicador5Component,
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
})
export class CompanyModule {
}
