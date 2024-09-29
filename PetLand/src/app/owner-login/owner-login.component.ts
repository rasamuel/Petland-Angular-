import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './owner-login.component.html',
  styleUrls: ['./owner-login.component.css']
})
export class OwnerLoginComponent {
  cedula: string = '';

  onSubmit() {
    // Aquí se manejará el envío del formulario
    console.log('Cédula:', this.cedula);
    // Llamada al backend para autenticar al cliente
  }
}
