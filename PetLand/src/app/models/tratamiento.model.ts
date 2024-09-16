import { Medicamento } from './medicamento.model';
import { Pet } from './pet.model';
import { Veterinario } from './veterinario.model';

export class Tratamiento {
  id: number;
  fecha: Date;
  cantidad: number;
  medicamento: Medicamento;
  mascota: Pet;
  veterinario: Veterinario;

  constructor(
    id: number = 0,
    fecha: Date = new Date(),
    cantidad: number = 0,
    medicamento: Medicamento = new Medicamento(),
    mascota: Pet = new Pet(),
    veterinario: Veterinario = new Veterinario()
  ) {
    this.id = id;
    this.fecha = fecha;
    this.cantidad = cantidad;
    this.medicamento = medicamento;
    this.mascota = mascota;
    this.veterinario = veterinario;
  }
}
