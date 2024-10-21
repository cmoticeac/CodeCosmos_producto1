import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './service/auth-interceptor.service';
import { AppComponent } from './app.component';
import { ListaEquiposComponent } from './lista-equipos/lista-equipos.component';
import { ServicioCliente } from './servicio-cliente/servicio-cliente.component';

@NgModule({
  imports: [
    BrowserModule
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    ServicioCliente,
    provideHttpClient(),
    importProvidersFrom(AppComponent), // Importa el AppComponent como standalone
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
    //bootstrap: [AppComponent]
})
export class AppModule { }
