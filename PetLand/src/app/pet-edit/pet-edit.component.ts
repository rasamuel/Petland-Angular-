import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { VeterinarianNavbarComponent } from '../veterinarian-navbar/veterinarian-navbar.component';

@Component({
  selector: 'app-pet-edit',
  standalone: true,
  imports: [CommonModule, VeterinarianNavbarComponent],
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent {

  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }
}
