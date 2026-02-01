import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Videojuego } from '../models/videojuego.model';


@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {

  // URL de tu Spring Boot
  private backUrl = 'http://localhost:9999/api/videojuegos'; 

  constructor(private http: HttpClient) {}
  



  // GET: Obtener todos
  obtenerVideojuegos(): Observable<Videojuego[]> {
    return this.http.get<Videojuego[]>(this.backUrl);
  }

  // POST: Crear nuevo
  agregarVideojuego(juego: Videojuego): Observable<Videojuego> {
    return this.http.post<Videojuego>(this.backUrl, juego);
  }

  // DELETE: Borrar
  borrarVideojuego(id: number): Observable<void> {
    return this.http.delete<void>(`${this.backUrl}/${id}`);
  }
}