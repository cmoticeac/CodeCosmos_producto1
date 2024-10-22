import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { DetailComponent } from "../detail-component/detail-component.component";
import { BusquedaPipe } from '../pipes/busqueda.pipe';

@Component({
  selector: 'app-players-component',
  standalone: true,
  imports: [CommonModule, FormsModule, DetailComponent, BusquedaPipe],  // Agrega FormsModule aquí
  templateUrl: './players-component.component.html',
  styleUrls: ['./players-component.component.css']  // Corregido a 'styleUrls'
})
export class PlayersComponent implements OnInit {

  posicionSeleccionada: string = '';
  searchText: string = '';
  
  datos: any[] = [];  // Aquí almacenaremos los jugadores del JSON
  
  ngOnInit(): void {
    // Cargar los datos usando fetch
    fetch('/assets/datos-equipos.json')
      .then(response => response.json())
      .then(data => {
        this.datos = data;  // Asigna los datos del archivo JSON a la variable 'datos'
      })
      .catch(error => console.error('Error al cargar los datos del JSON:', error));
  }
}
