import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { OwnerService } from '../services/owner.service';  // Importa el servicio
import { Owner } from '../models/owner.model';  // Asegúrate de importar el modelo Owner
import { FormsModule } from '@angular/forms';
import { VeterinarianNavbarComponent } from '../veterinarian-navbar/veterinarian-navbar.component';

@Component({
  selector: 'app-owner-add',
  standalone: true,
  imports: [FormsModule, VeterinarianNavbarComponent],
  templateUrl: './owner-add.component.html',
  styleUrls: ['./owner-add.component.css']
})
export class OwnerAddComponent {
  owner: Owner = new Owner();  // Inicializa el modelo de Owner

  constructor(
    private ownerService: OwnerService,  // Inyecta el servicio
    private router: Router,
    private location: Location
  ) {}

  // Método para registrar el dueño
  onSubmit() {
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
