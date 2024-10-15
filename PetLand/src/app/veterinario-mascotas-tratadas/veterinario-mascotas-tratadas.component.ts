import { Component, OnInit } from '@angular/core';
import { TratamientoService } from '../services/tratamiento.service';
import { Pet } from '../models/pet.model';
import { AuthVeterinarioService } from '../services/auth-veterinario.service';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-veterinario-mascotas-tratadas',
  standalone: true,
  templateUrl: './veterinario-mascotas-tratadas.component.html',
  imports: [CommonModule, FormsModule],  // Asegúrate de incluir CommonModule aquí
  styleUrls: ['./veterinario-mascotas-tratadas.component.css']
})
export class VeterinarioMascotasTratadasComponent implements OnInit {
  petsTratadas: Pet[] = []; // Lista de mascotas tratadas

  constructor(
    private tratamientoService: TratamientoService,
    private authVeterinarioService: AuthVeterinarioService
  ) {}

  ngOnInit(): void {
    this.cargarMascotasTratadas();
  }

  cargarMascotasTratadas(): void {

  }
}
