import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortadaComponent } from './components/portada/portada.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ProductosComponent } from './components/productos/productos.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
