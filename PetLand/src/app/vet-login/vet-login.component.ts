import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginService } from '../services/login.service';
import { AuthVeterinarioService } from '../services/auth-veterinario.service'; // Asegúrate de importar el servicio

@Component({
  selector: 'app-vet-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './vet-login.component.html',
  styleUrls: ['./vet-login.component.css']
})
export class VetLoginComponent {
  correo: string = '';
  contrasena: string = '';
  errorMessage: string = ''; // Para mostrar errores de login

  constructor(
    private router: Router,
    private loginService: LoginService,
    private authVeterinarioService: AuthVeterinarioService // Inyección del servicio
  ) {}

  onSubmit() {
    console.log('Datos capturados:', this.correo, this.contrasena);
    
    if (this.correo && this.contrasena) {
      this.loginService.loginVeterinario(this.correo, this.contrasena).subscribe({
        next: (response) => {
          console.log('Login exitoso:', response);
          
          // Guarda solo el ID en el servicio de autenticación
          this.authVeterinarioService.login(response); // Guarda el ID directamente

          // Redirige al portal del veterinario
          this.router.navigate(['/portal-veterinario']);
        },
        error: (error) => {
          console.error('Error en el login:', error);
          this.errorMessage = 'Credenciales incorrectas.';
        }
      });
    } else {
      this.errorMessage = 'Por favor completa todos los campos';
    }
  }
}
