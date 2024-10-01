import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { VeterinarianNavbarComponent } from "../veterinarian-navbar/veterinarian-navbar.component";
import { Location } from '@angular/common';
import { OwnerService } from '../services/owner.service'; // Asegúrate de importar el servicio
import { Pet } from '../models/pet.model'; // Asegúrate de importar el modelo Pet
import { Owner } from '../models/owner.model'; // Asegúrate de importar el modelo Owner

@Component({
  selector: 'app-owner-details',
  standalone: true,
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css'],
  imports: [CommonModule, RouterModule, VeterinarianNavbarComponent],
})
export class OwnerDetailsComponent implements OnInit {
  owner!: Owner;  // Inicializamos el owner vacío
  pets: Pet[] = []; // Lista de mascotas

  constructor(
    private location: Location,
    private route: ActivatedRoute, // Para obtener el ID de la ruta
    private ownerService: OwnerService // Servicio para obtener datos del dueño
  ) {}

  ngOnInit(): void {
    // Obtener el ID del propietario desde la ruta
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.loadOwnerDetails(id); // Cargar detalles del propietario
    }
  }

  // Función para cargar los detalles del dueño
  loadOwnerDetails(id: number): void {
    this.ownerService.getOwnerById(id).subscribe({
      next: (owner) => {
        this.owner = owner;
        this.pets = owner.pets; // Suponiendo que las mascotas están asociadas al propietario
      },
      error: (error) => {
        console.error('Error al obtener los detalles del dueño:', error);
      }
    });
  }

  goBack(): void {
    this.location.back(); 
  }
}
