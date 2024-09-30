import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VeterinarianNavbarComponent } from "../veterinarian-navbar/veterinarian-navbar.component";

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, VeterinarianNavbarComponent],
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  pets: any[] = []; // Lista de mascotas
  query: string = ''; // Búsqueda

  constructor() { }

  ngOnInit(): void {
    // Aquí se debería cargar la lista de mascotas (por ejemplo, llamando a una API)
    this.pets = [
      { id: 1, nombre: 'Rex', raza: 'Pastor Alemán', imageUrl: '...', edad: 5, peso: 30, enfermedad: 'Ninguna', estado: 'Activo' },
      { id: 2, nombre: 'Max', raza: 'Labrador', imageUrl: '...', edad: 3, peso: 25, enfermedad: 'Ninguna', estado: 'Activo' }
      // Agrega más mascotas aquí
    ];
  }

  onSearch(): void {
    // Lógica para buscar mascotas basado en la consulta (query)
    console.log(`Buscando mascotas con: ${this.query}`);
  }

  onDetails(id: number): void {
    // Lógica para ver los detalles de una mascota
    console.log(`Detalles de la mascota con ID: ${id}`);
  }

  onEdit(id: number): void {
    // Lógica para editar una mascota
    console.log(`Editar mascota con ID: ${id}`);
  }

  onDelete(id: number): void {
    // Lógica para eliminar una mascota
    console.log(`Eliminar mascota con ID: ${id}`);
  }
}
