import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioClientehttpService {
  localUrl: string = 'assets/datos-equipos.json';
  constructor(private http: HttpClient) { }
  getEquipos() {
    return this.http.get(this.localUrl);
  }
}
