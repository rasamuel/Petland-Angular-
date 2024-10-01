import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeterinarianNavbarComponent } from "../veterinarian-navbar/veterinarian-navbar.component";
import { RouterModule } from '@angular/router';
import { PetService } from '../services/pet.service'; // Importar el servicio de mascotas
import { Pet } from '../models/pet.model'; // Importar el modelo de mascota

@Component({
  selector: 'app-active-pets',
  templateUrl: './active-pets.component.html',
  styleUrls: ['./active-pets.component.css'],
  standalone: true,
  imports: [VeterinarianNavbarComponent, CommonModule, RouterModule]
})
export class ActivePetsComponent implements OnInit {
  pets: Pet[] = []; // Lista de mascotas activas

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.loadActivePets(); // Cargar las mascotas activas al inicializar el componente
  }

  // Método para cargar mascotas activas desde el backend
  loadActivePets(): void {
    this.petService.getActivePets().subscribe({
      next: (data) => {
        this.pets = data; // Asignar los datos recibidos a la lista de mascotas
        console.log('Mascotas activas obtenidas:', this.pets);
      },
      error: (error) => {
        console.error('Error al obtener las mascotas activas:', error);
      }
    });
  }

  // Método para desactivar una mascota
  deactivatePet(id: number): void {
    this.petService.deactivatePet(id).subscribe({
      next: () => {
        console.log(`Mascota con ID ${id} desactivada`);
        this.loadActivePets(); // Volver a cargar la lista de mascotas activas
      },
      error: (error) => {
        console.error(`Error al desactivar la mascota con ID ${id}:`, error);
      }
    });
  }
}
