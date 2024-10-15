import { Component, OnInit } from '@angular/core';
import { TratamientoService } from '../services/tratamiento.service';
import { Pet } from '../models/pet.model';
import { AuthVeterinarioService } from '../services/auth-veterinario.service';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { VeterinarianNavbarComponent } from '../veterinarian-navbar/veterinarian-navbar.component';

@Component({
  selector: 'app-veterinario-mascotas-tratadas',
  standalone: true,
  templateUrl: './veterinario-mascotas-tratadas.component.html',
  imports: [CommonModule, FormsModule, VeterinarianNavbarComponent],
  styleUrls: ['./veterinario-mascotas-tratadas.component.css']
})
export class VeterinarioMascotasTratadasComponent implements OnInit {
  petsTratadas: Pet[] = []; // Lista de mascotas tratadas

  constructor(
    private tratamientoService: TratamientoService,
    private authVeterinarioService: AuthVeterinarioService
  ) {}

  ngOnInit(): void {
    this.cargarMascotasTratadas();
  }

  cargarMascotasTratadas(): void {
    const veterinarioId = this.authVeterinarioService.getVeterinarioId(); // Obtener el ID del veterinario logueado

    if (veterinarioId) {
        this.tratamientoService.getMascotasTratadasPorVeterinario(veterinarioId).subscribe({
            next: (tratamientos) => {
                this.petsTratadas = tratamientos.map(tratamiento => tratamiento.mascota); // Suponiendo que cada tratamiento tiene una propiedad 'mascota'
                console.log('Mascotas tratadas:', this.petsTratadas); // Mensaje para verificar
            },
            error: (error) => {
                console.error('Error al cargar mascotas tratadas:', error); // Mensaje de error
            }
        });
    } else {
        console.log('No se encontró el ID del veterinario.'); // Mensaje si no se encuentra el ID
    }
}

}
