import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VeterinarianNavbarComponent } from "../veterinarian-navbar/veterinarian-navbar.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-owner-add',
  standalone: true,
  imports: [ RouterModule, VeterinarianNavbarComponent, FormsModule],
  templateUrl: './owner-add.component.html',
  styleUrls: ['./owner-add.component.css']
})
export class OwnerAddComponent {
  owner = {
    nombre: '',
    cedula: '',
    correo: '',
    celular: ''
  };

  constructor(private location: Location) {}

  onSubmit() {
    console.log('Datos enviados:', this.owner);
    // Aquí irá la lógica para registrar el dueño.
  }

  goBack(): void {
    this.location.back();
  }
}
