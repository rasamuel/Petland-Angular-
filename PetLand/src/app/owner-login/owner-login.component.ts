import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { LoginService } from '../services/login.service';  // Importa tu servicio de login

@Component({
  selector: 'app-owner-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './owner-login.component.html',
  styleUrls: ['./owner-login.component.css']
})
export class OwnerLoginComponent {
  cedula: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit() {
    // Llamada al servicio para autenticar al owner
    if (this.cedula) {
      this.loginService.loginOwner(this.cedula).subscribe({
        next: (response) => {
          console.log('Login exitoso:', response);
          // Redirigir al componente owner-pet-list con el ID del owner autenticado
          this.router.navigate(['/owner-pets-list', response]);  // Asume que el ID del owner viene en la respuesta
        },
        error: (error) => {
          console.error('Error en el login:', error);
          alert('Cédula inválida, intenta de nuevo');
        }
      });
    } else {
      alert('Por favor, ingresa tu cédula');
    }
  }
}
