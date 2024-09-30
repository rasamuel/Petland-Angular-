import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private baseUrl = 'http://localhost:8080/api/pets';  // Ajusta la URL según tu configuración de backend

  constructor(private http: HttpClient) {}

  // Obtener todas las mascotas
  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.baseUrl);
  }

  // Obtener una mascota por su ID
  getPetById(id: number): Observable<Pet> {
    return this.http.get<Pet>(`${this.baseUrl}/${id}`);
  }

  // Crear una nueva mascota
  createPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.baseUrl, pet);
  }

  // Actualizar una mascota existente
  updatePet(id: number, pet: Pet): Observable<Pet> {
    return this.http.put<Pet>(`${this.baseUrl}/${id}`, pet);
  }

  // Eliminar una mascota por su ID
  deletePet(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
