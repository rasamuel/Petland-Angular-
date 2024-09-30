import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VeterinarianNavbarComponent } from "../veterinarian-navbar/veterinarian-navbar.component";

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
  selector: 'app-inactive-pets',
  standalone: true,
  imports: [CommonModule, RouterModule, VeterinarianNavbarComponent ],
  templateUrl: './inactive-pets.component.html',
  styleUrls: ['./inactive-pets.component.css']
})
export class InactivePetsComponent {
  pets: Pet[] = [
    {
      id: 1,
      nombre: 'Max',
      raza: 'Bulldog',
      imageUrl: 'assets/images/max.jpg',
      edad: 5,
      peso: 18,
      enfermedad: 'Artritis',
      estado: 'Inactiva'
    },
    // Agrega más mascotas inactivas aquí...
  ];

  activatePet(id: number) {
    console.log(`Activar la mascota con ID: ${id}`);
    // Aquí puedes implementar la lógica para activar la mascota
  }
}
