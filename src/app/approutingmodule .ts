import {CreateproductComponent} from './createproduct/createproduct.component';
import {ProductComponent} from './product/product.component';
import {SearchproductComponent} from './searchproduct/searchproduct.component';

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'customer', pathMatch: 'full'},
  {path: 'customer', component: ProductComponent},
  {path: 'add', component: CreateproductComponent},
  {path: 'findbylastname', component: SearchproductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule  {
}
