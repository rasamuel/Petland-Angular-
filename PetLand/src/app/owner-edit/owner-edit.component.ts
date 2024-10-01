import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  // Para obtener los parámetros de la ruta
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VeterinarianNavbarComponent } from '../veterinarian-navbar/veterinarian-navbar.component';
import { OwnerService } from '../services/owner.service';
import { Owner } from '../models/owner.model';
import { Location } from '@angular/common';  // Para volver atrás


@Component({
  selector: 'app-owner-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, VeterinarianNavbarComponent],
  templateUrl: './owner-edit.component.html',
  styleUrls: ['./owner-edit.component.css']
})
export class OwnerEditComponent implements OnInit {
  owner: Owner = new Owner();  // Dueño a editar
  ownerId!: number;  // ID del dueño

  constructor(
    private ownerService: OwnerService,
    private route: ActivatedRoute,  // Para obtener el ID del dueño de la URL
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    // Obtener el ID del dueño desde la URL
    this.ownerId = Number(this.route.snapshot.paramMap.get('id'));

    // Obtener el dueño a editar
    this.ownerService.getOwnerById(this.ownerId).subscribe({
      next: (data) => {
        this.owner = data;
      },
      error: (error) => {
        console.error('Error al obtener los detalles del dueño', error);
      }
    });
  }

  // Método para enviar los cambios al backend
  onSubmit(): void {
    this.ownerService.updateOwner(this.ownerId, this.owner).subscribe({
      next: () => {
        console.log('Dueño actualizado con éxito');
        this.router.navigate(['/owners']);  // Redirigir a la lista de dueños tras la actualización
      },
      error: (error) => {
        console.error('Error al actualizar el dueño', error);
      }
    });
  }

  // Método para volver atrás
  goBack(): void {
    this.location.back();
  }
}
