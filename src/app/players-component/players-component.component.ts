import { Component, OnInit } from '@angular/core';
import { players } from '../../data/data'; 
import { CommonModule } from '@angular/common';
import { DetailComponent } from "../detail-component/detail-component.component";
import { JugadoresService } from '../service/jugadores.service';  // Importa el servicio

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
  datos: any[] = [ ];
  
  constructor(private jugadoresService: JugadoresService) { }

  ngOnInit() {
    this.jugadoresService.getJugadores().subscribe((data) => {
      this.datos = data;  // Cargar los jugadores desde el archivo JSON
    });
  }

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
  