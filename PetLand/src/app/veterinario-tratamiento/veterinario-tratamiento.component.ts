import { Component, OnInit } from '@angular/core';
import { TratamientoService } from '../services/tratamiento.service';
import { Pet } from '../models/pet.model';
import { Medicamento } from '../models/medicamento.model';
import { Tratamiento } from '../models/tratamiento.model';
import { AuthVeterinarioService } from '../services/auth-veterinario.service';
import { PetService } from '../services/pet.service';
import { MedicamentoService } from '../services/medicamento.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Para manejar formularios
import { Router } from '@angular/router';
import { VeterinarioService } from '../services/veterinario.service';
import { Veterinario } from '../models/veterinario.model';
import { VeterinarianNavbarComponent } from '../veterinarian-navbar/veterinarian-navbar.component';


@Component({
  selector: 'app-veterinario-tratamiento',
  templateUrl: './veterinario-tratamiento.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, VeterinarianNavbarComponent],
  styleUrls: ['./veterinario-tratamiento.component.css']
})
export class VeterinarioTratamientoComponent implements OnInit {
  pets: Pet[] = [];
  medicamentos: Medicamento[] = [];
  tratamiento: Tratamiento = new Tratamiento();
  veterinario: Veterinario | null = null;


  constructor(
    private tratamientoService: TratamientoService,
    private authVeterinarioService: AuthVeterinarioService,
    private petService: PetService,
    private medicamentoService: MedicamentoService,
    private router: Router, 
    private veterinarioService: VeterinarioService
  ) {}

  ngOnInit(): void {
    this.cargarMascotas();
    this.cargarMedicamentos();
  }

  cargarMascotas(): void {
    this.petService.getActivePets().subscribe({
      next: (data: Pet[]) => {
        this.pets = data;
      },
      error: (error) => {
        console.error('Error al cargar mascotas:', error);
      }
    });
  }

  cargarMedicamentos(): void {
    this.medicamentoService.getAllMedicamentos().subscribe({
      next: (data: Medicamento[]) => {
        this.medicamentos = data;
      },
      error: (error) => {
        console.error('Error al cargar medicamentos:', error);
      }
    });
  }

  onSubmit(): void {
    const veterinarioId = this.authVeterinarioService.getVeterinarioId();
    
    console.log('Veterinario ID:', veterinarioId);
    console.log('Mascota seleccionada:', this.tratamiento.mascota);
    
    if (veterinarioId && this.tratamiento.mascota) {
        console.log('Buscando veterinario con ID:', veterinarioId);
        
        this.veterinarioService.getVeterinario(veterinarioId).subscribe({
            next: (data: Veterinario) => {
                this.veterinario = data;
                console.log('Veterinario encontrado:', this.veterinario);
                
                this.tratamiento.veterinario = this.veterinario;
                this.tratamiento.fecha = new Date();

                console.log('Unidades disponibles del medicamento:', this.tratamiento.medicamento.unidadesDisponibles);
                
                // Verifica si la cantidad es 0
                if (this.tratamiento.cantidad <= 0) {
                    alert('La cantidad del medicamento debe ser mayor que 0.'); // Mensaje de error
                    console.log('Error: La cantidad del medicamento es igual o menor a 0.');
                    return; // Detiene la ejecución
                }

                // Verifica si hay suficientes unidades disponibles
                if (this.tratamiento.medicamento.unidadesDisponibles >= this.tratamiento.cantidad) {
                    this.tratamientoService.createTratamiento(this.tratamiento).subscribe({
                        next: (response) => {
                            console.log('Tratamiento registrado exitosamente:', response);
                            location.reload(); // Recarga la página para actualizar la lista de medicamentos
                        },
                        error: (error) => {
                            console.error('Error al registrar tratamiento:', error);
                            alert('Error al registrar el tratamiento. Inténtalo nuevamente.'); // Mensaje de error
                        }
                    });
                } else {
                    alert('No hay suficientes unidades del medicamento seleccionado.'); // Mensaje de error
                    console.log('Error: No hay suficientes unidades del medicamento seleccionado.');
                }
            },
            error: (error) => {
                console.error('Error al cargar el veterinario:', error);
                alert('Error al obtener la información del veterinario.'); // Mensaje de error
            }
        });
    } else {
        alert('Debes seleccionar una mascota y estar logueado como veterinario.'); // Mensaje de error
        console.log('Condiciones no cumplidas: Veterinario ID o mascota no seleccionados.');
        if (!veterinarioId) {
            this.router.navigate(['/vet-login']);
        }
    }
}


goBack(): void {
  this.router.navigate([`/portal-veterinario`]);
}

}
