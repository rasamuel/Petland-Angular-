import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VeterinarioService } from '../services/veterinario.service';
import { Veterinario } from '../models/veterinario.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';

@Component({
  selector: 'app-veterinarian-edit',
  templateUrl: './veterinarian-edit.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, AdminNavbarComponent],
  styleUrls: ['./veterinarian-edit.component.css']
})
export class VeterinarianEditComponent implements OnInit {
  veterinario: Veterinario = new Veterinario();  // Initialize the veterinarian object

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private veterinarioService: VeterinarioService
  ) {}

  ngOnInit(): void {
    this.loadVeterinario();
  }

  // Load the veterinarian details by ID
  loadVeterinario(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.veterinarioService.getVeterinario(id).subscribe({
      next: (data) => {
        this.veterinario = data;
      },
      error: (error) => {
        console.error('Error al cargar los detalles del veterinario:', error);
      }
    });
  }

  // Update veterinarian details
  onSubmit(): void {
    this.veterinarioService.updateVeterinario(this.veterinario.id, this.veterinario).subscribe({
      next: () => {
        this.router.navigate(['/veterinarios']);
      },
      error: (error) => {
        console.error('Error al actualizar el veterinario:', error);
      }
    });
  }

  // Go back to the veterinarian list
  goBack(): void {
    this.router.navigate(['/veterinarios']);
  }
}
