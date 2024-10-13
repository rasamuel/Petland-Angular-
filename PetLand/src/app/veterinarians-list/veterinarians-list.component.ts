import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeterinarioService } from '../services/veterinario.service'; 
import { Veterinario } from '../models/veterinario.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';


@Component({
  selector: 'app-veterinarians-list',
  templateUrl: './veterinarians-list.component.html',
  imports: [FormsModule, CommonModule, AdminNavbarComponent],
  standalone: true,
  styleUrls: ['./veterinarians-list.component.css']
})
export class VeterinariansListComponent implements OnInit {
  veterinarians: Veterinario[] = [];
  query: string = '';

  constructor(private veterinarioService: VeterinarioService, private router: Router) {}

  ngOnInit(): void {
    this.loadVeterinarians();
  }

  // Cargar la lista de veterinarios
  loadVeterinarians(): void {
    this.veterinarioService.getVeterinarios().subscribe({
      next: (data) => {
        this.veterinarians = data;
      },
      error: (error) => {
        console.error('Error al cargar la lista de veterinarios:', error);
      }
    });
  }

  // Buscar veterinarios
  onSearch(): void {
    if (this.query) {
      this.veterinarioService.getVeterinarios().subscribe({
        next: (data) => {
          this.veterinarians = data.filter(vet => 
            vet.nombre.toLowerCase().includes(this.query.toLowerCase()) ||
            vet.especialidad.toLowerCase().includes(this.query.toLowerCase())
          );
        },
        error: (error) => {
          console.error('Error en la búsqueda:', error);
        }
      });
    } else {
      this.loadVeterinarians(); // Cargar la lista completa si no hay búsqueda
    }
  }

  // Agregar veterinario
  onAdd(): void {
    this.router.navigate(['/veterinarios/add']);
  }
  // Ver detalles
  onDetails(id: number): void {
    this.router.navigate([`/veterinarios/${id}`]);
  }

  // Editar veterinario
  onEdit(id: number): void {
    this.router.navigate([`/veterinarios/${id}/edit`]);
  }
 
  // Borrar veterinario
  onDelete(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar a este veterinario?')) {
      this.veterinarioService.deleteVeterinario(id).subscribe({
        next: () => {
          this.loadVeterinarians(); // Recargar la lista después de eliminar
        },
        error: (error) => {
          console.error('Error al eliminar el veterinario:', error);
        }
      });
    }
  }
}
