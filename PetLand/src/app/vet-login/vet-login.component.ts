import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vet-login',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './vet-login.component.html',
  styleUrls: ['./vet-login.component.css']
})
export class VetLoginComponent {
  nombre: string = '';
  contrasena: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // You can implement the logic here to authenticate the vet.
    console.log('Nombre:', this.nombre);
    console.log('Contraseña:', this.contrasena);

    // For example, route to a veterinarian dashboard upon successful login
    this.router.navigate(['/veterinarian/dashboard']);
  }
}
