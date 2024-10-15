import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'http://localhost:8080/api/dashboard'; // Cambia esto a tu URL de API

  constructor(private http: HttpClient) {}

  getTotalTratamientosUltimoMes(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/total-tratamientos-ultimo-mes`).pipe(
      catchError(this.handleError)
    );
  }

  getVeterinariosActivos(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/veterinarios-activos`).pipe(
      catchError(this.handleError)
    );
  }

  getVeterinariosInactivos(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/veterinarios-inactivos`).pipe(
      catchError(this.handleError)
    );
  }

  getTotalMascotas(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/total-mascotas`).pipe(
      catchError(this.handleError)
    );
  }

  getMascotasActivas(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/mascotas-activas`).pipe(
      catchError(this.handleError)
    );
  }

  getVentasTotales(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/ventas-totales`).pipe(
      catchError(this.handleError)
    );
  }

  getGananciasTotales(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/ganancias-totales`).pipe(
      catchError(this.handleError)
    );
  }

  getTratamientosPorMedicamento(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tratamientos-por-medicamento`).pipe(
      catchError(this.handleError)
    );
  }

  getTopTratamientos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/top-medicamentos`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('Ocurrió un error', error);
    return throwError(() => new Error('Error en la comunicación con el servidor.'));
  }
}
