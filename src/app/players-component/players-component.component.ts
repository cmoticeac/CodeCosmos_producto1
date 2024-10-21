import { Component, OnInit } from '@angular/core';
import { players } from '../../data/data'; 
import { CommonModule } from '@angular/common';
import { DetailComponent } from "../detail-component/detail-component.component";
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-players-component',
  standalone: true,
  imports: [CommonModule, DetailComponent ],
  templateUrl: './players-component.component.html',
  styleUrl: './players-component.component.css'
})

/*
  A.  Incorporar los datos creados al componente
  B.  Usando directivas ngFor y ngIf realizar el listado
  C.  Incorporar el HTML+CSS para diseñar el listado
  D. Incorporar el listado a la aplicación
  */
  export class PlayersComponent implements OnInit {
    posicionSeleccionada: string = '';
    jugadorEncontrado: any = null;
    jugadorNoEncontrado: boolean = false;
    datos: any[] = [];  // Aquí almacenaremos los jugadores del JSON
  
    ngOnInit() {
      // Cargar los datos usando fetch
      fetch('/assets/datos-equipos.json')
        .then(response => response.json())
        .then(data => {
          this.datos = data;  // Asigna los datos del archivo JSON a la variable 'datos'
        })
        .catch(error => console.error('Error al cargar los datos del JSON:', error));
    }
  
    realizarBusqueda(nombreJugador: string) {
      // Buscar un jugador que coincida con el nombre y la posición seleccionada
      this.jugadorEncontrado = this.datos.find(
        (jugador) =>
          jugador.nombre.toLowerCase() === nombreJugador.toLowerCase() &&
          jugador.posicion.toLowerCase() === this.posicionSeleccionada.toLowerCase()
      );
  
      if (this.jugadorEncontrado) {
        this.jugadorNoEncontrado = false;
      } else {
        this.jugadorNoEncontrado = true;
        this.jugadorEncontrado = null;
      }
    }
  
    resetBusqueda() {
      this.jugadorNoEncontrado = false;
      this.posicionSeleccionada = '';
    }
  }