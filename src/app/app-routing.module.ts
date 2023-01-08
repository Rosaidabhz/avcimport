import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortadaComponent } from './components/portada/portada.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ListCartComponent } from './components/list-cart/list-cart.component';
const routes: Routes = [
  {
    path:'',
    component:PortadaComponent
  },
  {
    path:'home',
    component:PortadaComponent
  },
  {
    path:'sobre',
    component:SobreComponent
  },
  {
    path:'productos',
    component:ProductosComponent
  },
  {
    path:'list-cart',
    component:ListCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
