 
import { CommonModule } from '@angular/common';
import listadoNombreEquipo from '../../assets/datos-equipos.json';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-detail-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-component.component.html',
  styleUrl: './detail-component.component.css'
})

/*
A.Incorporar los datos creados al componente
B.Usando los eventos de comunicación de Angular, comunicar el item seleccionado en el listado
 al detalle para previsualizar los datos de ese detalle.
C.Incorporar el HTML+CSS para diseñar el listado
D.Incorporar el listado a la aplicación
*/
export class DetailComponent {

  datos:any[]=listadoNombreEquipo;

  @Input() equipoSeleccionado: string ='';
  nombreEquipoSel: string;
  constructor(){
    this.nombreEquipoSel=this.equipoSeleccionado;
   
  }
  //seleccion=  equipoSeleccionado

}
