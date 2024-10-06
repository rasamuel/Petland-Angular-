import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8080/api/login'; // URL base del backend

  constructor(private http: HttpClient) {}

  // Método para autenticar a un veterinario
  loginVeterinario(correo: string, contrasena: string): Observable<any> {
    const params = { correo, contrasena };
    return this.http.post(`http://localhost:8080/vet/login`, null, { params });
  }
  

  // Método para autenticar a un owner (propietario)
  loginOwner(cedula: string): Observable<any> {
    const params = { cedula };
    return this.http.post(`http://localhost:8080/owners/login`, null, { params });
  }

  loginAdministrador(correo: string, contrasena: string): Observable<any> {
    return this.http.post(`http://localhost:8080/admin/login`, null, {
      params: {
        correo: correo,
        contrasena: contrasena
      },
      withCredentials: true
    });
  }
}
