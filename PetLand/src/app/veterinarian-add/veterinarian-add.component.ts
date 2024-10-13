import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veterinario } from '../models/veterinario.model';
import { VeterinarioService } from '../services/veterinario.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';

@Component({
  selector: 'app-veterinarian-add',
  templateUrl: './veterinarian-add.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, AdminNavbarComponent],
  styleUrls: ['./veterinarian-add.component.css']
})
export class VeterinarianAddComponent implements OnInit {
  veterinario: Veterinario = new Veterinario(); // Modelo vacío para los datos del veterinario

  constructor(
    private veterinarioService: VeterinarioService, 
    private router: Router
  ) {}

  ngOnInit(): void {
      // Establecer el estado por defecto a "Activo"
      this.veterinario.estado = true;
  }

  // Método para enviar el formulario
  onSubmit(): void {
    if (this.veterinario) {
      this.veterinarioService.createVeterinario(this.veterinario).subscribe({
        next: (response) => {
          console.log('Veterinario registrado exitosamente:', response);
          this.router.navigate(['/veterinarios']); // Redirige a la lista de veterinarios
        },
        error: (error) => {
          console.error('Error al registrar el veterinario:', error);
        }
      });
    } else {
      console.error('El formulario está incompleto');
    }
  }

  // Método para regresar a la lista de veterinarios
  goBack(): void {
    this.router.navigate(['/veterinarios']);
  }
}
