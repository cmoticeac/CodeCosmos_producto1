import { Component, OnInit } from '@angular/core';
import { ServicioClientehttpService } from '../servicio-clientehttp.service';


@Component({
  selector: 'app-lista-equipos-component',
  standalone: true,
  imports:[],
  templateUrl: './lista-equipos-component.component.html',
  styleUrl: './lista-equipos-component.component.css'
})
export class ListaEquiposComponentComponent implements OnInit {
  equipos: any[] = [];

  constructor(private APIlistado: ServicioClientehttpService){
       
  }

  ngOnInit(): void {
      this.getEquipos();
  }
  getEquipos() {
    
    this.APIlistado.getEquipos().subscribe(
      (datosjsonEquipo: any)=>{
        this.equipos=datosjsonEquipo;
          console.log(this.equipos);
          alert(this.equipos);
      }
    )
  }

}
