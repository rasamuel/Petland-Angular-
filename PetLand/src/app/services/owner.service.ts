import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Owner } from '../models/owner.model';
import { Pet } from '../models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private baseUrl = 'http://localhost:8080/api/owners';  // URL base del backend

  constructor(private http: HttpClient) {}

  // Obtener todos los dueños
  getOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.baseUrl);
  }

  // Obtener un dueño por su ID
  getOwnerById(id: number): Observable<Owner> {
    return this.http.get<Owner>(`${this.baseUrl}/${id}`);
  }

  // Crear un nuevo dueño
  createOwner(owner: Owner): Observable<Owner> {
    return this.http.post<Owner>(`${this.baseUrl}/add`, owner);
  }

  // Actualizar un dueño existente
  updateOwner(id: number, owner: Owner): Observable<Owner> {
    return this.http.put<Owner>(`${this.baseUrl}/${id}/update`, owner);
  }

  // Eliminar un dueño por su ID
  deleteOwner(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  // Obtener las mascotas del dueño logueado (requiere sesión activa)
  getOwnerPets(ownerId: number): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.baseUrl}/${ownerId}/pets`);
  }

}
