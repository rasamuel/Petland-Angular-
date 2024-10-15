import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tratamiento } from '../models/tratamiento.model';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {
  private apiUrl = 'http://localhost:8080/api/tratamientos'; // URL del backend

  constructor(private http: HttpClient) {}

  // Crear un nuevo tratamiento
  createTratamiento(tratamiento: Tratamiento): Observable<Tratamiento> {
    return this.http.post<Tratamiento>('http://localhost:8080/api/tratamientos', tratamiento);
  }
  

  // Obtener todas las mascotas tratadas por un veterinario
  getMascotasTratadasPorVeterinario(veterinarioId: number): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>(`${this.apiUrl}/tratamiento/veterinario/${veterinarioId}`);
}


getTratamientosPorMascota(mascotaId: number): Observable<Tratamiento[]> {
  return this.http.get<Tratamiento[]>(`${this.apiUrl}/tratamiento/mascota/${mascotaId}`);
}
}
