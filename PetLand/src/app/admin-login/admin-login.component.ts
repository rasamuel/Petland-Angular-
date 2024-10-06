import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  correo: string = '';
  contrasena: string = '';

  constructor(private router: Router, private loginService: LoginService) {}

  onSubmit() {
    if (this.correo && this.contrasena) {
      this.loginService.loginAdministrador(this.correo, this.contrasena).subscribe({
        next: (response) => {
          console.log('Login exitoso:', response);
          this.router.navigate(['/admin-dashboard']);  // Redirigir a la página del administrador
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
