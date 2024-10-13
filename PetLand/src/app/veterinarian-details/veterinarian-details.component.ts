import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { VeterinarioService } from '../services/veterinario.service';
import { Veterinario } from '../models/veterinario.model';
import { Location } from '@angular/common'; 
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';

@Component({
  selector: 'app-veterinarian-details',
  standalone: true,
  imports: [CommonModule, AdminNavbarComponent],  
  templateUrl: './veterinarian-details.component.html',
  styleUrls: ['./veterinarian-details.component.css']
})
export class VeterinarianDetailsComponent implements OnInit {
  veterinarian: Veterinario | undefined;  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private veterinarioService: VeterinarioService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.loadVeterinarian();
  }

  // Load veterinarian details based on the ID from the route
  loadVeterinarian(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.veterinarioService.getVeterinario(id).subscribe({
        next: (data) => {
          this.veterinarian = data;
        },
        error: (error) => {
          console.error('Error al cargar el veterinario:', error);
        }
      });
    }
  }

  // Back to the list
  goBack(): void {
    this.location.back();
  }
}
