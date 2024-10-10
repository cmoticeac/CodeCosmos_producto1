import { Component } from '@angular/core';
import { players } from '../../data/data'; 

@Component({
  selector: 'app-players-component',
  standalone: true,
  imports: [],
  templateUrl: './players-component.component.html',
  styleUrl: './players-component.component.css'
})
export class PlayersComponent {
  playersList = players;
}
