import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-component',
  standalone: true,  // Hacer que el componente sea standalone
  imports: [CommonModule],
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponent implements OnInit {
  @Input() equipoSeleccionado: string = '';  // Recibe el equipo seleccionado

  datos: any[] = [];  // Se cargará desde el JSON

  ngOnInit(): void {
    // Cargar los datos desde el archivo equipo-datos.json
    fetch('/assets/datos-equipos.json')
      .then(response => response.json())
      .then(data => {
        this.datos = data;  // Asigna los datos del JSON a la variable datos
      })
      .catch(error => console.error('Error al cargar los datos del JSON:', error));
  }
}
