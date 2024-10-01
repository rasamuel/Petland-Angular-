import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet.model'; // Modelo de Pet

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private baseUrl = 'http://localhost:8080/api/pets'; // URL base del backend

  constructor(private http: HttpClient) { }

  // Obtener todas las mascotas
  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.baseUrl}`);
  }

  // Buscar mascotas por nombre o raza
  searchPets(query: string): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.baseUrl}/search?query=${query}`);
  }

  // Obtener detalles de una mascota por ID
  getPetById(id: number): Observable<Pet> {
    return this.http.get<Pet>(`${this.baseUrl}/${id}`);
  }

  // Eliminar una mascota
  deletePet(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
  

  // Editar una mascota (actualización)
  updatePet(id: number, pet: Pet): Observable<Pet> {
    return this.http.put<Pet>(`${this.baseUrl}/${id}/update`, pet);
  }
  
  // Agregar una nueva mascota
  addPet(pet: Pet, ownerId: number): Observable<Pet> {
    return this.http.post<Pet>(`${this.baseUrl}/add?ownerId=${ownerId}`, pet);
  }
  
  getActivePets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.baseUrl}/activas`);
  }

  // Desactivar una mascota
  deactivatePet(id: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/deactivate/${id}`, {});
  }

  getInactivePets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.baseUrl}/inactivas`);
  }

  activatePet(id: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/activate/${id}`, {});
  }

}
