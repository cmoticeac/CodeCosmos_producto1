import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlayersComponent } from "./players-component/players-component.component";
import { DetailComponent } from "./detail-component/detail-component.component";
import { MediaComponent } from "./media-component/media-component.component";
import { InicioComponent } from "./inicio/inicio.component";
import { ListaEquiposComponent } from "./lista-equipos/lista-equipos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayersComponent, DetailComponent, MediaComponent, InicioComponent, ListaEquiposComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
   title=""
  // aqui se carga componente de ver equipos
  componenteVisible = false;
  muestraEquipos(){
    alert('pulsado equipos a mostrar')
    this.componenteVisible = true;

  

  }

  ngOnInit(): void {
    this.componenteVisible = true;
      this.title="Al pulsa listado boton sale listado equipos "
      

  }
   
}
