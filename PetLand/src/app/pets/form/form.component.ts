import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pet } from '../../models/pet.model';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Asegurarse de incluir FormsModule
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() pet: Pet = {   // Recibe la mascota que puede ser nueva o editada
    id: 0,
    nombre: '',
    raza: '',
    edad: 0,
    peso: 0,
    enfermedad: '',
    estado: false,
    imageUrl: ''
  };

  @Input() isEditMode = false;  // Recibe si está en modo edición o no

  constructor(private petService: PetService) { }

  savePet() {
    if (this.isEditMode) {
      this.petService.updatePet(this.pet);
    } else {
      this.petService.addPet(this.pet);
    }
    this.resetForm();  
  }
  
  

  resetForm() {
    this.pet = {
      id: 0,
      nombre: '',
      raza: '',
      edad: 0,
      peso: 0,
      enfermedad: '',
      estado: false,
      imageUrl: ''
    };
  }
}
