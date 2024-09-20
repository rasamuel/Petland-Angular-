import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetService } from '../../services/pet.service';
import { Pet } from '../../models/pet.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  pet: Pet | undefined;  // Mascota a mostrar

  constructor(private route: ActivatedRoute, private petService: PetService) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pet = this.petService.getPetById(+id);  // Obtener la mascota por su ID
    }
  }
}
