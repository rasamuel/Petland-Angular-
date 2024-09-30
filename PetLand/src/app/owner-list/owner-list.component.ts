import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VeterinarianNavbarComponent } from "../veterinarian-navbar/veterinarian-navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-owner-list',
  standalone: true,
  imports: [CommonModule, RouterModule, VeterinarianNavbarComponent],
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent {
  // Simulación de los datos de dueños (por ahora estático)
  owners = [
    { id: 1, nombre: 'Juan Perez', cedula: '123456789', correo: 'juan@example.com', celular: '555-1234' },
    { id: 2, nombre: 'Maria Lopez', cedula: '987654321', correo: 'maria@example.com', celular: '555-4321' }
  ];

  viewDetails(id: number) {
    console.log(`Ver detalles del dueño con ID ${id}`);
    // Aquí agregarás la lógica para ver detalles (por ejemplo, redireccionar a otra página)
  }

  editOwner(id: number) {
    console.log(`Editar dueño con ID ${id}`);
    // Aquí agregarás la lógica para editar (redireccionar al formulario de edición)
  }

  deleteOwner(id: number) {
    console.log(`Eliminar dueño con ID ${id}`);
    // Aquí agregarás la lógica para eliminar el dueño
  }
}
