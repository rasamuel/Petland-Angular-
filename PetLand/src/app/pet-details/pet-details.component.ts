import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeterinarianNavbarComponent } from '../veterinarian-navbar/veterinarian-navbar.component';
import { PetService } from '../services/pet.service';  // Importa el servicio
import { ActivatedRoute } from '@angular/router';  // Para obtener el parámetro de la URL
import { Location } from '@angular/common';  // Para manejar la navegación
import { Pet } from '../models/pet.model';  // Importa el modelo de Pet
import { Tratamiento } from '../models/tratamiento.model'; // Importa el modelo de Tratamiento
import { TratamientoService } from '../services/tratamiento.service'; // Importa el servicio de tratamientos

@Component({
  selector: 'app-pet-details',
  standalone: true,
  imports: [VeterinarianNavbarComponent, CommonModule],
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {
  pet: Pet | undefined;  // Variable para almacenar los detalles de la mascota
  tratamientos: Tratamiento[] = []; // Variable para almacenar los tratamientos

  constructor(
    private petService: PetService,
    private tratamientoService: TratamientoService, // Inyectar el servicio de tratamientos
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPetDetails();  // Llama a la función para obtener los detalles
  }

  // Método para obtener los detalles de la mascota desde el backend
  getPetDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));  // Obtiene el ID de la URL
    if (id) {
      this.petService.getPetById(id).subscribe({
        next: (data) => {
          this.pet = data;  // Asigna los datos obtenidos a la variable 'pet'
          this.getTratamientos(); // Obtiene los tratamientos después de obtener la mascota
        },
        error: (error) => {
          console.error('Error al obtener los detalles de la mascota', error);
        }
      });
    }
  }

  // Método para obtener los tratamientos dados a la mascota
  getTratamientos(): void {
    if (this.pet) {
      this.tratamientoService.getTratamientosPorMascota(this.pet.id).subscribe({
        next: (data) => {
          this.tratamientos = data; // Asigna los tratamientos obtenidos a la variable
        },
        error: (error) => {
          console.error('Error al obtener los tratamientos de la mascota', error);
        }
      });
    }
  }

  // Método para volver atrás
  goBack(): void {
    this.location.back();
  }
}
