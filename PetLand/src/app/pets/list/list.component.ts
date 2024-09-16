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
  isAddFormVisible = false;  // Controla la visibilidad del formulario de agregar/editar
  isEditMode = false;  // Indica si estamos en modo de edición

  constructor(private petService: PetService) {
    this.pets = this.petService.getPets();
  }

  // Método para alternar la visibilidad del formulario de agregar
  toggleAddForm() {
    this.isAddFormVisible = true;
    this.isEditMode = false;  // Estamos en modo agregar, no edición
    this.selectedPet = this.getDefaultPet();  // Inicializa una nueva mascota vacía para agregar
  }

  // Método para mostrar los detalles de una mascota
  showDetails(pet: Pet) {
    this.isAddFormVisible = false;  // Ocultar el formulario
    this.selectedPet = pet;  // Mostrar los detalles de la mascota seleccionada
  }

  // Método para habilitar el modo edición
  editPet(pet: Pet) {
    this.selectedPet = pet;  // Selecciona la mascota para editar
    this.isAddFormVisible = true;  // Mostrar el formulario
    this.isEditMode = true;  // Indicar que estamos en modo edición
  }

  // Método para eliminar una mascota
  deletePet(id: number) {
    this.petService.deletePet(id);
    this.pets = this.petService.getPets();  // Actualiza la lista después de eliminar
    this.selectedPet = null;  // Ocultar los detalles si la mascota eliminada estaba seleccionada
  }

  // Método para obtener una mascota vacía (cuando se agrega una nueva)
  getDefaultPet(): Pet {
    return new Pet(0, '', '', 0, 0, '', true, '');
  }
}
