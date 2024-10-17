import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-component',
  standalone: true,
  imports: [],
  templateUrl: './media-component.component.html',
  styleUrl: './media-component.component.css'
})

/*
 *  A.Incorporar los datos creados al componente
    B.Usando los eventos de comunicación de Angular,
     comunicar el item seleccionado en el listado aldetalle 
     para previsualizar los datos de ese detalle.
    C.Incorporar el HTML+CSS para diseñar el listado
    D.Incorporar los eventos dentro del componente para poder realizar el control de la multimedia
    E.Incorporar el listado a la aplicación
 */
export class MediaComponent implements OnInit{

  ngOnInit(): void {
      
  }
}
