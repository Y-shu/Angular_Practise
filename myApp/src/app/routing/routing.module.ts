import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*
*Routes--is an NgModule that provides navigation and URL manipulation capabilities.
*
*/
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ProductsComponent } from '../products/products.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ParamTestComponent } from '../param-test/param-test.component';

// Router definition
const my_routes:Routes = [
  // We have to configure the route so then only we can use then 
  // we configure using RouterModule.forRoot()
{'path':'home',component:HomeComponent},
{'path':'products',component:ProductsComponent},
{'path':'smiles/:id',component:ParamTestComponent},
// last route and wildCard
{'path':'**',component:PageNotFoundComponent},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // we are telling angular to recognized these configured routes using forRoots method
    RouterModule.forRoot(my_routes)
  ]
})
export class RoutingModule { }
