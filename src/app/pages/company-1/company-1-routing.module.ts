import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Indicador1Component} from './indicador1/indicador1.component';
import {Indicador3Component} from './indicador3/indicador3.component';
import {Indicador2Component} from './indicador2/indicador2.component';

const routes: Routes = [
  {path: 'indicador-1', component: Indicador1Component},
  {path: 'indicador-2', component: Indicador2Component},
  {path: 'indicador-3', component: Indicador3Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Company1RoutingModule {
}
