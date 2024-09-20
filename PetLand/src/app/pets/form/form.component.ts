import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { PetService } from '../../services/pet.service';
import { Pet } from '../../models/pet.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  pet: Pet = new Pet(0, '', '', 0, 0, '', true, '');
  isEditMode = false;

  constructor(private route: ActivatedRoute, private petService: PetService, private router: Router) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      const petToEdit = this.petService.getPetById(+id);
      if (petToEdit) {
        this.pet = petToEdit;
      }
    }
  }

  savePet() {
    if (this.isEditMode) {
      this.petService.updatePet(this.pet);
    } else {
      this.petService.addPet(this.pet);
    }
    this.router.navigate(['/mascotas']);  // Redirige a la lista de mascotas después de guardar
  }
}
