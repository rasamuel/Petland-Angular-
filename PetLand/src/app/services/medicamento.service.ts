// medicamento.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicamento } from '../models/medicamento.model';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {
  private apiUrl = 'http://localhost:8080/api/medicamentos';

  constructor(private http: HttpClient) {}

  getAllMedicamentos(): Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>(this.apiUrl);
  }
}
