import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeterinarianNavbarComponent } from "../veterinarian-navbar/veterinarian-navbar.component";
import { CommonModule } from '@angular/common';
import { OwnerService } from '../services/owner.service';  // Asegúrate de importar el servicio
import { Owner } from '../models/owner.model';  // Importa el modelo de Owner

@Component({
  selector: 'app-owner-list',
  standalone: true,
  imports: [CommonModule, VeterinarianNavbarComponent],
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  owners: Owner[] = [];  // Lista de propietarios

  constructor(private ownerService: OwnerService, private router: Router) {}

  ngOnInit(): void {
    this.loadOwners();  // Cargar la lista de dueños al inicializar el componente
  }

  // Método para cargar la lista de dueños desde el backend
  loadOwners(): void {
    this.ownerService.getOwners().subscribe({
      next: (data) => {
        this.owners = data;  // Asigna los datos obtenidos a la lista de propietarios
        console.log('Dueños cargados:', this.owners);
      },
      error: (error) => {
        console.error('Error al obtener la lista de dueños:', error);
      }
    });
  }

  onAdd(): void {
    this.router.navigate(['/owners/add']);
  }

  // Lógica para ver los detalles de un dueño
  viewDetails(id: number): void {
    this.router.navigate([`/owners/${id}`]);  // Redirige a la página de detalles
  }
  // Lógica para editar un dueño
  editOwner(id: number): void {
    this.router.navigate([`/owners/${id}/edit`]);  // Redirige a la página de edición
  }

  // Lógica para eliminar un dueño
  deleteOwner(id: number): void {
    this.ownerService.deleteOwner(id).subscribe({
      next: () => {
        console.log(`Dueño con ID ${id} eliminado`);
        this.owners = this.owners.filter(owner => owner.id !== id);  // Eliminar dueño de la lista local
      },
      error: (error) => {
        console.error('Error al eliminar el dueño:', error);
      }
    });
  }
}

