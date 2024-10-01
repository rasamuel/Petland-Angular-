import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwnerService } from '../services/owner.service';
import { Pet } from '../models/pet.model';
import { CommonModule } from '@angular/common';

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

  constructor(private route: ActivatedRoute, private ownerService: OwnerService) {}

  ngOnInit() {
    console.log('ngOnInit ejecutado una vez');
  
    this.ownerId = Number(this.route.snapshot.paramMap.get('id'));
  
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
