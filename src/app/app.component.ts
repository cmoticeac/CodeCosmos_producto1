import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PlayersComponent } from "./players-component/players-component.component";
import { DetailComponent } from "./detail-component/detail-component.component";
import { MediaComponent } from "./media-component/media-component.component";
import { InicioComponent } from "./inicio/inicio.component";
import { ListaEquiposComponent } from './lista-equipos/lista-equipos.component';
import { CommonModule } from '@angular/common';

import listadoNombreEquipo from '../assets/datos-equipos.json';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayersComponent, DetailComponent, MediaComponent, InicioComponent, ListaEquiposComponent,CommonModule],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
}) 
export class AppComponent implements OnInit  {
  
  // aqui se carga componente de ver equipos
  componenteVisible:boolean = false
  nombreEquipo:any[] =[]
  
  muestraEquipos() {  
    this.componenteVisible = true;
    //alert('visible: ' + this.componenteVisible)
  }

  /*
      Al pulsar el select de equipo ( el objetivo seria ver los componentes)
  */
  onSelect(equipo: string) {
    //console.log('Equipo seleccionado:', equipo);
    alert(equipo)
    // Aquí puedes agregar la lógica que quieres ejecutar cuando se selecciona un equipo
  }

  ngOnInit(): void {
    this.nombreEquipo =listadoNombreEquipo;
    // alert(listadoNombreEquipo)
    this.componenteVisible = false;  
  }
}

