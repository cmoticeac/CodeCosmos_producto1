import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  private url = '/assets/datos-equipos.json';  // Ruta al archivo JSON

  constructor(private http: HttpClient) { }

  getJugadores(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
