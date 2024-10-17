import { Component } from '@angular/core';
import { players } from '../../data/data'; 

@Component({
  selector: 'app-players-component',
  standalone: true,
  imports: [],
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
  playersList = players;
  

}
