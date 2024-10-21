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
  playersList = players;
  contador: number[];
  verComponenteDetail:boolean;

  constructor(){
    this.contador=[];
    this.verComponenteDetail=false;
    
  }

  // se pasa un numero para su posterior lectura array[indice] luego *ngFor
  getIndice(numeroIndice: number): number[] {
    this.contador = Array.from({ length: numeroIndice }, (_, indice) => indice);
     return this.contador;
  }
  
  
  cargaBusqueda(){
    this.verComponenteDetail=true;
  }

}
