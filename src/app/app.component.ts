import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PlayersComponent } from "./players-component/players-component.component";
import { DetailComponent } from "./detail-component/detail-component.component";
import { MediaComponent } from "./media-component/media-component.component";
import { InicioComponent } from "./inicio/inicio.component";
import { ListaEquiposComponentComponent } from './lista-equipos-component/lista-equipos-component.component';


 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayersComponent, DetailComponent, MediaComponent, InicioComponent, ListaEquiposComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {
 
  // aqui se carga componente de ver equipos
  componenteVisible:boolean = false
  muestraEquipos() {
    
    this.componenteVisible = true
    alert('visible: ' +this.componenteVisible)
  }

  ngOnInit(): void {
    this.componenteVisible = false
  }  
}