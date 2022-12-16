import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from './components/portada/portada.component';
import { HeaderComponent } from './components/header/header.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    HeaderComponent,
    SobreComponent,
    ProductosComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
