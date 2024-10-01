import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeterinarianNavbarComponent } from "../veterinarian-navbar/veterinarian-navbar.component";
import { CommonModule } from '@angular/common';
import { OwnerService } from '../services/owner.service';
import { Owner } from '../models/owner.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-owner-list',
  standalone: true,
  imports: [CommonModule, VeterinarianNavbarComponent, FormsModule],
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  owners: Owner[] = [];
  searchQuery: string = ''; // Agregar una propiedad para la búsqueda

  constructor(private ownerService: OwnerService, private router: Router) {}

  ngOnInit(): void {
    this.loadOwners(); // Cargar la lista de dueños al inicializar el componente
  }

  // Método para cargar la lista de dueños desde el backend
  loadOwners(): void {
    this.ownerService.getOwners().subscribe({
      next: (data) => {
        this.owners = data; // Asigna los datos obtenidos a la lista de propietarios
        console.log('Dueños cargados:', this.owners);
      },
      error: (error) => {
        console.error('Error al obtener la lista de dueños:', error);
      }
    });
  }

  // Método para buscar dueños
  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.ownerService.searchOwners(this.searchQuery).subscribe({
        next: (data) => {
          this.owners = data; // Actualiza la lista de propietarios con los resultados de la búsqueda
          console.log('Resultados de la búsqueda:', this.owners);
        },
        error: (error) => {
          console.error('Error al buscar dueños:', error);
        }
      });
    } else {
      this.loadOwners(); // Si no hay búsqueda, carga la lista completa
    }
  }

  onAdd(): void {
    this.router.navigate(['/owners/add']);
  }

  viewDetails(id: number): void {
    this.router.navigate([`/owners/${id}`]);
  }

  editOwner(id: number): void {
    this.router.navigate([`/owners/${id}/edit`]);
  }

  deleteOwner(id: number): void {
    this.ownerService.deleteOwner(id).subscribe({
      next: () => {
        console.log(`Dueño con ID ${id} eliminado`);
        this.owners = this.owners.filter(owner => owner.id !== id); // Eliminar dueño de la lista local
      },
      error: (error) => {
        console.error('Error al eliminar el dueño:', error);
      }
    });
  }
}
