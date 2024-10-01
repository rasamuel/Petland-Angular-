import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  // Para obtener los parámetros de la ruta
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VeterinarianNavbarComponent } from '../veterinarian-navbar/veterinarian-navbar.component';
import { PetService } from '../services/pet.service';
import { Pet } from '../models/pet.model';
import { Location } from '@angular/common';  // Para volver atrás


@Component({
  selector: 'app-pet-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, VeterinarianNavbarComponent],
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {
  pet: Pet = new Pet();  // Mascota a editar
  petId!: number;  // ID de la mascota

  constructor(
    private petService: PetService,
    private route: ActivatedRoute,  // Para obtener el ID de la mascota de la URL
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    // Obtener el ID de la mascota desde la URL
    this.petId = Number(this.route.snapshot.paramMap.get('id'));

    // Obtener la mascota a editar
    this.petService.getPetById(this.petId).subscribe({
      next: (data) => {
        this.pet = data;
      },
      error: (error) => {
        console.error('Error al obtener los detalles de la mascota', error);
      }
    });
  }

  // Método para enviar los cambios al backend
  onSubmit(): void {
    this.petService.updatePet(this.petId, this.pet).subscribe({
      next: () => {
        console.log('Mascota actualizada con éxito');
        this.router.navigate(['/pets']);  // Redirigir a la lista de mascotas tras la actualización
      },
      error: (error) => {
        console.error('Error al actualizar la mascota', error);
      }
    });
  }

  // Método para volver atrás
  goBack(): void {
    this.location.back();
  }
}
