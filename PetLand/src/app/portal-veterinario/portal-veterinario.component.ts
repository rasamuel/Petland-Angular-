import { Component } from '@angular/core';
import { VeterinarianNavbarComponent } from "../veterinarian-navbar/veterinarian-navbar.component";

@Component({
  selector: 'app-portal-veterinario',
  standalone: true,
  imports: [VeterinarianNavbarComponent],
  templateUrl: './portal-veterinario.component.html',
  styleUrl: './portal-veterinario.component.css'
})
export class PortalVeterinarioComponent {

}
