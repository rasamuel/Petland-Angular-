import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VeterinarianNavbarComponent } from "../veterinarian-navbar/veterinarian-navbar.component";
import { Location } from '@angular/common';

@Component({
  selector: 'app-owner-details',
  standalone: true,
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css'],
  imports: [CommonModule,RouterModule, VeterinarianNavbarComponent],
})
export class OwnerDetailsComponent {
  // Simulación de datos por el momento.
  owner = {
    nombre: 'Juan Pérez',
    cedula: '123456789',
    correo: 'juan@example.com',
    celular: '555-1234',
  };

  pets = [
    { id: 1, nombre: 'Bobby', raza: 'Golden Retriever', imageUrl: 'https://via.placeholder.com/100', edad: 3, peso: 25, enfermedad: 'Sano' },
    { id: 2, nombre: 'Whiskers', raza: 'Gato Persa', imageUrl: 'https://via.placeholder.com/100', edad: 2, peso: 5, enfermedad: 'Sano' }
  ];

  constructor(private location: Location) {}  

  goBack(): void {
    this.location.back(); 
  }
}
