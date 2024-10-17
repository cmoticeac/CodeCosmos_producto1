import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-equipos',
  standalone: true,
  imports: [],
  templateUrl: './lista-equipos.component.html',
  styleUrl: './lista-equipos.component.css'
})
export class ListaEquiposComponent implements OnInit  {
  equiposBaloncesto: string[] 

  constructor() {

   this.equiposBaloncesto= [
      'Los Angeles Lakers',
      'Chicago Bulls',
      'Boston Celtics',
      'Miami Heat',
      'Golden State Warriors',
      'San Antonio Spurs'
    ]     
  
  }
  ngOnInit(): void {
      
  } 
}
