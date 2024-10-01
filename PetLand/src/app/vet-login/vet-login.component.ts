import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-vet-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],  // Asegúrate de que FormsModule esté aquí
  templateUrl: './vet-login.component.html',
  styleUrls: ['./vet-login.component.css']
})
export class VetLoginComponent {
  correo: string = '';
  contrasena: string = '';

  constructor(private router: Router, private loginService: LoginService) {}

  onSubmit() {
    console.log('Datos capturados:', this.correo, this.contrasena);  // Verifica si captura los datos correctamente
    if (this.correo && this.contrasena) {
      this.loginService.loginVeterinario(this.correo, this.contrasena).subscribe({
        next: (response) => {
          console.log('Login exitoso:', response);
          this.router.navigate(['/portal-veterinario']);
        },
        error: (error) => {
          console.error('Error en el login:', error);
        }
      });
    } else {
      alert('Por favor completa todos los campos');
    }
  }
}
