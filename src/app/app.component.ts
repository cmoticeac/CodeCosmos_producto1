import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlayersComponent } from "./players-component/players-component.component";
import { DetailComponent } from "./detail-component/detail-component.component";
import { MediaComponent } from "./media-component/media-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayersComponent, DetailComponent, MediaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'producto1_CodeCosmos';
}
