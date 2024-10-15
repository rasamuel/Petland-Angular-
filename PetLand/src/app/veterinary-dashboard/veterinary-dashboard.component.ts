import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service'; // Importa el servicio
import { forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';

@Component({
  selector: 'app-veterinary-dashboard',
  templateUrl: './veterinary-dashboard.component.html',
  standalone: true,
  imports: [CommonModule, AdminNavbarComponent],
  styleUrls: ['./veterinary-dashboard.component.css']
})
export class VeterinaryDashboardComponent implements OnInit {
  totalTratamientosUltimoMes: number = 0;
  veterinariosActivos: number = 0;
  veterinariosInactivos: number = 0;
  totalMascotas: number = 0;
  mascotasActivas: number = 0;
  ventasTotales: number = 0;
  gananciasTotales: number = 0;
  tratamientosPorMedicamento: any[] = []; // Almacena medicamentos y cantidades
  topTratamientos: any[] = []; // Almacena top 3 tratamientos

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  // Cargar todos los datos del dashboard
  loadDashboardData(): void {
    // Utiliza forkJoin para ejecutar las llamadas en paralelo
    forkJoin({
      totalTratamientos: this.dashboardService.getTotalTratamientosUltimoMes(),
      veterinariosActivos: this.dashboardService.getVeterinariosActivos(),
      veterinariosInactivos: this.dashboardService.getVeterinariosInactivos(),
      totalMascotas: this.dashboardService.getTotalMascotas(),
      mascotasActivas: this.dashboardService.getMascotasActivas(),
      ventasTotales: this.dashboardService.getVentasTotales(),
      gananciasTotales: this.dashboardService.getGananciasTotales(),
      tratamientosPorMedicamento: this.dashboardService.getTratamientosPorMedicamento(),
      topTratamientos: this.dashboardService.getTopTratamientos()
    }).subscribe({
      next: (data) => {
        this.totalTratamientosUltimoMes = data.totalTratamientos;
        this.veterinariosActivos = data.veterinariosActivos;
        this.veterinariosInactivos = data.veterinariosInactivos;
        this.totalMascotas = data.totalMascotas;
        this.mascotasActivas = data.mascotasActivas;
        this.ventasTotales = data.ventasTotales;
        this.gananciasTotales = data.gananciasTotales;
        this.tratamientosPorMedicamento = data.tratamientosPorMedicamento;
        this.topTratamientos = data.topTratamientos;
      },
      error: (error) => {
        console.error('Error al cargar los datos del dashboard', error);
      }
    });
  }
}
