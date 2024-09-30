import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { VeterinarianNavbarComponent } from "../veterinarian-navbar/veterinarian-navbar.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-owner-edit',
  standalone: true,
  templateUrl: './owner-edit.component.html',
  styleUrls: ['./owner-edit.component.css'],
  imports: [VeterinarianNavbarComponent, FormsModule]
})
export class OwnerEditComponent {
  owner = {
    nombre: 'Juan Pérez',
    cedula: '123456789',
    correo: 'juan@example.com',
    celular: '555-1234',
  };

  constructor(private location: Location) {}

  // Función para volver atrás
  goBack(): void {
    this.location.back();
  }

  onSubmit() {
    // Aquí implementarás la lógica para actualizar los datos del dueño
    console.log('Datos actualizados:', this.owner);
  }
}
