import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { VeterinarianNavbarComponent } from '../veterinarian-navbar/veterinarian-navbar.component';

@Component({
  selector: 'app-pet-add',
  standalone: true,
  imports: [CommonModule, VeterinarianNavbarComponent],
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent {

  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }
}
