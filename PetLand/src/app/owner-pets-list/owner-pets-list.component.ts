import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwnerService } from '../services/owner.service';
import { Pet } from '../models/pet.model';
import { CommonModule } from '@angular/common';
import { Owner } from '../models/owner.model';  // Asegúrate de tener el modelo de Owner importado

@Component({
  selector: 'app-owner-pets-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './owner-pets-list.component.html',
  styleUrls: ['./owner-pets-list.component.css']
})
export class OwnerPetsListComponent implements OnInit {
  ownerId!: number;
  ownerName: string = '';  // Para almacenar el nombre del propietario
  pets: Pet[] = [];

  constructor(private route: ActivatedRoute, private ownerService: OwnerService) {}

  ngOnInit() {
    console.log('ngOnInit ejecutado una vez');
  
    this.ownerId = Number(this.route.snapshot.paramMap.get('id'));

    // Primero, obtén los detalles del propietario
    this.ownerService.getOwnerById(this.ownerId).subscribe({
      next: (owner: Owner) => {
        this.ownerName = owner.nombre;  // Asigna el nombre del propietario
        console.log('Dueño obtenido:', owner);
      },
      error: (error) => {
        console.error('Error al obtener el dueño:', error);
      }
    });
  
    // Luego, obtén las mascotas del propietario
    this.ownerService.getOwnerPets(this.ownerId).subscribe({
      next: (data: Pet[]) => {
        this.pets = data;
        console.log('Mascotas obtenidas:', this.pets);  
      },
      error: (error) => {
        console.error('Error al obtener las mascotas:', error);
      }
    });
  }
}
