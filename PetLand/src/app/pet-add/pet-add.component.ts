import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Para manejar formularios
import { Location } from '@angular/common';
import { Router } from '@angular/router'; // Para la redirección
import { PetService } from '../services/pet.service'; // Servicio para manejar mascotas
import { OwnerService } from '../services/owner.service'; // Servicio para manejar dueños
import { VeterinarianNavbarComponent } from '../veterinarian-navbar/veterinarian-navbar.component';
import { Pet } from '../models/pet.model'; // Modelo de Pet
import { Owner } from '../models/owner.model'; // Modelo de Owner

@Component({
  selector: 'app-pet-add',
  standalone: true,
  imports: [CommonModule, VeterinarianNavbarComponent, FormsModule], // Asegúrate de importar FormsModule
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent implements OnInit {
  pet: Pet = new Pet(); // Modelo de la mascota a registrar
  owners: Owner[] = []; // Lista de dueños para seleccionar
  selectedOwnerId: number | undefined; // ID del dueño seleccionado

  constructor(
    private petService: PetService,
    private ownerService: OwnerService, // Servicio para obtener dueños
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    // Cargar la lista de dueños al inicializar el componente
    this.ownerService.getOwners().subscribe({
      next: (data) => {
        this.owners = data; // Asigna la lista de dueños
      },
      error: (err) => console.error('Error al obtener la lista de dueños:', err)
    });
  }

  // Método para agregar la mascota
  onSubmit(): void {
    if (this.selectedOwnerId) {
      this.petService.addPet(this.pet, this.selectedOwnerId).subscribe({
        next: () => {
          console.log('Mascota agregada correctamente');
          this.router.navigate(['/pets']); // Redirigir a la lista de mascotas
        },
        error: (err) => console.error('Error al agregar la mascota:', err)
      });
    } else {
      alert('Por favor, selecciona un dueño');
    }
  }

  // Método para volver atrás
  goBack(): void {
    this.location.back();
  }
}
