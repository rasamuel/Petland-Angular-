import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importar Router
import { OwnerService } from '../services/owner.service';
import { Pet } from '../models/pet.model';
import { CommonModule } from '@angular/common';
import { Owner } from '../models/owner.model';

@Component({
  selector: 'app-owner-pets-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './owner-pets-list.component.html',
  styleUrls: ['./owner-pets-list.component.css']
})
export class OwnerPetsListComponent implements OnInit {
  ownerId!: number;
  ownerName: string = '';
  pets: Pet[] = [];

  constructor(
    private route: ActivatedRoute,
    private ownerService: OwnerService,
    private router: Router // Inyectar Router
  ) {}

  ngOnInit() {
    this.ownerId = Number(this.route.snapshot.paramMap.get('id'));

    // Obtener detalles del propietario
    this.ownerService.getOwnerById(this.ownerId).subscribe({
      next: (owner: Owner) => {
        this.ownerName = owner.nombre;
      },
      error: (error) => {
        console.error('Error al obtener el dueño:', error);
      }
    });

    // Obtener mascotas del propietario
    this.ownerService.getOwnerPets(this.ownerId).subscribe({
      next: (data: Pet[]) => {
        this.pets = data;
      },
      error: (error) => {
        console.error('Error al obtener las mascotas:', error);
      }
    });
  }

  onDetails(id: number): void {
    this.router.navigate([`/pets/owner/${id}`]);
  }
}
