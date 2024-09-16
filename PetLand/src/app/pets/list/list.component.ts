import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pet } from '../../models/pet.model';
import { PetService } from '../../services/pet.service';
import { FormComponent } from '../form/form.component'; 
import { DetailComponent } from '../detail/detail.component'; 

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormComponent, DetailComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  pets: Pet[] = [];
  selectedPet: Pet | null = null;  // Permitir que sea Pet o null
  isAddFormVisible = false;
  isEditMode = false;

  constructor(private petService: PetService) {
    this.pets = this.petService.getPets();
  }

  toggleAddForm() {
    this.isAddFormVisible = !this.isAddFormVisible;
    this.isEditMode = false;  // Asegúrate de que no estás en modo edición
    this.selectedPet = this.getDefaultPet();  // Inicializa con una nueva mascota vacía
  }
  

  showDetails(pet: Pet) {
    this.selectedPet = pet;
  }

  editPet(pet: Pet) {
    this.selectedPet = pet;  // Pasar los datos de la mascota seleccionada
    this.isAddFormVisible = true;  // Mostrar el formulario
    this.isEditMode = true;  // Indicar que estamos en modo edición
  }
  

  deletePet(id: number) {
    this.petService.deletePet(id);
    this.pets = this.petService.getPets();
    this.selectedPet = null;  // Ocultar detalles si la mascota seleccionada es eliminada
  }

  getDefaultPet(): Pet {
    return new Pet(0, '', '', 0, 0, '', true, '');
  }
}
