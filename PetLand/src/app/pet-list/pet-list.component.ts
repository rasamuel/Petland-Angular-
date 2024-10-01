import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VeterinarianNavbarComponent } from "../veterinarian-navbar/veterinarian-navbar.component";
import { PetService } from '../services/pet.service'; 
import { Pet } from '../models/pet.model'; 

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, VeterinarianNavbarComponent], // Elimina HttpClientModule
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  pets: Pet[] = []; 
  query: string = ''; 

  constructor(private petService: PetService, private router: Router) { }

  ngOnInit(): void {
    // Cargar la lista de mascotas desde la API al inicializar el componente
    this.petService.getPets().subscribe({
  
      next: (data) => {
        this.pets = data; 
        // Depuración: Imprimir las mascotas recibidas
        console.log('Lista de mascotas recibidas:', this.pets); 
  
        // Si quieres también puedes imprimir la longitud de la lista
        console.log('Número de mascotas:', this.pets.length);
      },
      error: (error) => {
        console.error("Error al obtener la lista de mascotas", error);
      }
    });
  }
  

  onSearch(): void {
    if (this.query) {
      this.petService.searchPets(this.query).subscribe({
        next: (data) => {
          this.pets = data;
        },
        error: (error) => {
          console.error("Error al buscar mascotas", error);
        }
      });
    } else {
      this.ngOnInit();
    }
  }

  onDetails(id: number): void {
    this.router.navigate([`/pets/${id}`]); // Redirige a /pets/:id para ver los detalles
  }
  

  onEdit(id: number): void {
    this.router.navigate([`/pets/${id}/edit`]);
  }

  onDelete(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta mascota?')) {  // Confirmación antes de borrar
      this.petService.deletePet(id).subscribe({
        next: () => {
          console.log(`Mascota con ID ${id} eliminada`);
          this.pets = this.pets.filter(pet => pet.id !== id);  // Eliminar la mascota de la lista en el frontend
        },
        error: (error) => {
          console.error("Error al eliminar la mascota", error);
        }
      });
    }
  }
  

  onAdd(): void {
    this.router.navigate(['/pets/add']);
  }
}
