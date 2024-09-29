import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-owner-pets-list',
  standalone: true,
  imports: [CommonModule], // Asegúrate de importar CommonModule aquí
  templateUrl: './owner-pets-list.component.html',
  styleUrls: ['./owner-pets-list.component.css']
})
export class OwnerPetsListComponent {
  pets = [
    {
      id: 1,
      nombre: 'Max',
      raza: 'Bulldog',
      imageUrl: 'https://via.placeholder.com/100',
      edad: 3,
      peso: 15,
      enfermedad: 'Artritis'
    },
    {
      id: 2,
      nombre: 'Bella',
      raza: 'Labrador',
      imageUrl: 'https://via.placeholder.com/100',
      edad: 5,
      peso: 25,
      enfermedad: 'Ninguna'
    },
    {
      id: 3,
      nombre: 'Simba',
      raza: 'Golden Retriever',
      imageUrl: 'https://via.placeholder.com/100',
      edad: 4,
      peso: 22,
      enfermedad: 'Alergia'
    }
  ];
}
