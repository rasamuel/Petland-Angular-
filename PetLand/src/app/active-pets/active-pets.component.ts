import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeterinarianNavbarComponent } from "../veterinarian-navbar/veterinarian-navbar.component";
import { RouterModule } from '@angular/router';

interface Pet {
  id: number;
  nombre: string;
  raza: string;
  imageUrl: string;
  edad: number;
  peso: number;
  enfermedad: string;
  estado: string;
}

@Component({
  selector: 'app-active-pets',
  templateUrl: './active-pets.component.html',
  styleUrls: ['./active-pets.component.css'],
  standalone: true,
  imports: [VeterinarianNavbarComponent,CommonModule, RouterModule ]
})
export class ActivePetsComponent {
  pets: Pet[] = [
    {
      id: 1,
      nombre: 'Fido',
      raza: 'Labrador',
      imageUrl: 'assets/images/fido.jpg',
      edad: 4,
      peso: 25,
      enfermedad: 'Ninguna',
      estado: 'Activa'
    },
    // Agrega más mascotas activas aquí...
  ];

  deactivatePet(id: number) {
    // Aquí pondremos la lógica para desactivar una mascota cuando conectemos con la API
    console.log(`Desactivar la mascota con ID: ${id}`);
  }
}
