import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Owner } from '../models/owner.model';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private baseUrl = 'http://localhost:8080/api/owners';  // Ajusta la URL según tu configuración de backend

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
    return this.http.post<Owner>(this.baseUrl, owner);
  }

  // Actualizar un dueño existente
  updateOwner(id: number, owner: Owner): Observable<Owner> {
    return this.http.put<Owner>(`${this.baseUrl}/${id}`, owner);
  }

  // Eliminar un dueño por su ID
  deleteOwner(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
