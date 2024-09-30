import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeterinarianNavbarComponent } from '../veterinarian-navbar/veterinarian-navbar.component';
import { Location } from '@angular/common';  // Importa el servicio Location

@Component({
  selector: 'app-pet-details',
  standalone: true,
  imports: [VeterinarianNavbarComponent, CommonModule],
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent {

  constructor(private location: Location) { }

  // Método para volver atrás
  goBack(): void {
    this.location.back();
  }
}
