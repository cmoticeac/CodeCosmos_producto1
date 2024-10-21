import { Component } from '@angular/core';
import { players } from '../../data/data'; 
import { CommonModule } from '@angular/common';
import { DetailComponent } from "../detail-component/detail-component.component";
@Component({
  selector: 'app-players-component',
  standalone: true,
  imports: [CommonModule, DetailComponent],
  templateUrl: './players-component.component.html',
  styleUrl: './players-component.component.css'
})

/*
  A.  Incorporar los datos creados al componente
  B.  Usando directivas ngFor y ngIf realizar el listado
  C.  Incorporar el HTML+CSS para diseñar el listado
  D. Incorporar el listado a la aplicación
  */
 
export class PlayersComponent {
  posicionSeleccionada: string = '';
  jugadorEncontrado: any = null;
  jugadorNoEncontrado: boolean = false;
  datos: any[] = [ 
    { nombre: 'Jugador 1', equipo: 'Equipo A', posicion: 'Base' },
    { nombre: 'Jugador 2', equipo: 'Equipo B', posicion: 'Alero' },
    // Añade más jugadores aquí para la búsqueda
  ];
  
  seleccionarPosicion(posicion: string) {
    this.posicionSeleccionada = posicion;
  }
  
  realizarBusqueda(nombreJugador: string) {
    this.jugadorEncontrado = this.datos.find(
      (jugador) => jugador.nombre.toLowerCase() === nombreJugador.toLowerCase() &&
                    jugador.posicion === this.posicionSeleccionada
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
  