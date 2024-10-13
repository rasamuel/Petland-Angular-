import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veterinario } from '../models/veterinario.model';  // Asegúrate de que la ruta al modelo sea correcta

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  private baseUrl = 'http://localhost:8080/api/veterinarios';  // Cambia la URL según tu backend

  constructor(private http: HttpClient) { }

  // Obtener todos los veterinarios
  getVeterinarios(): Observable<Veterinario[]> {
    return this.http.get<Veterinario[]>(`${this.baseUrl}`);
  }

  // Obtener un veterinario por ID
  getVeterinario(id: number): Observable<Veterinario> {
    return this.http.get<Veterinario>(`${this.baseUrl}/${id}`);
  }

  // Crear un nuevo veterinario
  createVeterinario(veterinario: Veterinario): Observable<Veterinario> {
    return this.http.post<Veterinario>(`${this.baseUrl}`, veterinario);
  }

  // Actualizar un veterinario existente
  updateVeterinario(id: number, veterinario: Veterinario): Observable<Veterinario> {
    return this.http.put<Veterinario>(`${this.baseUrl}/${id}`, veterinario);
  }

  // Eliminar un veterinario
  deleteVeterinario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
