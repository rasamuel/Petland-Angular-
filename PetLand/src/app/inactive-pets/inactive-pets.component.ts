import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VeterinarianNavbarComponent } from "../veterinarian-navbar/veterinarian-navbar.component";
import { PetService } from '../services/pet.service'; // Importar el servicio de mascotas
import { Pet } from '../models/pet.model'; // Importar el modelo de mascota

@Component({
  selector: 'app-inactive-pets',
  standalone: true,
  imports: [CommonModule, RouterModule, VeterinarianNavbarComponent],
  templateUrl: './inactive-pets.component.html',
  styleUrls: ['./inactive-pets.component.css']
})
export class InactivePetsComponent implements OnInit {
  pets: Pet[] = []; // Lista de mascotas inactivas

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.loadInactivePets(); // Cargar las mascotas inactivas al inicializar el componente
  }

  // Método para cargar mascotas inactivas desde el backend
  loadInactivePets(): void {
    this.petService.getInactivePets().subscribe({
      next: (data) => {
        this.pets = data; // Asignar los datos recibidos a la lista de mascotas inactivas
        console.log('Mascotas inactivas obtenidas:', this.pets);
      },
      error: (error) => {
        console.error('Error al obtener las mascotas inactivas:', error);
      }
    });
  }

  // Método para activar una mascota
  activatePet(id: number): void {
    this.petService.activatePet(id).subscribe({
      next: () => {
        console.log(`Mascota con ID ${id} activada`);
        this.loadInactivePets(); // Volver a cargar la lista de mascotas inactivas después de activar una
      },
      error: (error) => {
        console.error(`Error al activar la mascota con ID ${id}:`, error);
      }
    });
  }
}
