import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Indicador1Component} from './indicador1/indicador1.component';
import {Indicador3Component} from './indicador3/indicador3.component';
import {Indicador2Component} from './indicador2/indicador2.component';
import {Indicador4Component} from './indicador4/indicador4.component';
import {Indicador5Component} from './indicador5/indicador5.component';

const routes: Routes = [
  {path: 'indicador-1', component: Indicador1Component},
  {path: 'indicador-2', component: Indicador2Component},
  {path: 'indicador-3', component: Indicador3Component},
  {path: 'indicador-4', component: Indicador4Component},
  {path: 'indicador-5', component: Indicador5Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {
}
