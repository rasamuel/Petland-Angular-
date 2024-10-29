import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { OwnerService } from '../services/owner.service';
import { Owner } from '../models/owner.model';
import { FormsModule } from '@angular/forms';
import { VeterinarianNavbarComponent } from '../veterinarian-navbar/veterinarian-navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-owner-add',
  standalone: true,
  imports: [FormsModule, VeterinarianNavbarComponent, CommonModule],
  templateUrl: './owner-add.component.html',
  styleUrls: ['./owner-add.component.css']
})
export class OwnerAddComponent {
  owner: Owner = new Owner();  // Inicializa el modelo de Owner
  emailError: string = '';     // Variable para almacenar el mensaje de error

  constructor(
    private ownerService: OwnerService,
    private router: Router,
    private location: Location
  ) {}

  // Método para registrar el dueño
  onSubmit() {
    // Validación para el correo
    if (!this.owner.correo || !this.owner.correo.includes('@')) {
      this.emailError = 'El correo debe contener un arroba (@)';
      return;
    }

    // Reinicia el mensaje de error si el correo es válido
    this.emailError = '';

    // Llama al servicio para registrar al dueño
    this.ownerService.createOwner(this.owner).subscribe({
      next: (response) => {
        console.log('Dueño registrado con éxito:', response);
        this.router.navigate(['/owners']);  // Redirige a la lista de dueños después de registrar
      },
      error: (error) => {
        console.error('Error al registrar el dueño:', error);
      }
    });
  }

  // Método para regresar
  goBack(): void {
    this.location.back();
  }
}
