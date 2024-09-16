import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pet } from '../../models/pet.model';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  // Usamos Input para recibir la mascota seleccionada desde el componente padre (list.component)
  @Input() pet: Pet | null = null; // Puede ser nulo si no hay mascota seleccionada
}
