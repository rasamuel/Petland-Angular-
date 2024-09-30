import { Pet } from './pet.model';

export class Owner {
  id: number;
  nombre: string;
  cedula: string;
  correo: string;
  celular: string;
  pets: Pet[];

  constructor(
    id: number = 0,
    nombre: string = '',
    cedula: string = '',
    correo: string = '',
    celular: string = '',
    pets: Pet[] = [] 
  ) {
    this.id = id;
    this.nombre = nombre;
    this.cedula = cedula;
    this.correo = correo;
    this.celular = celular;
    this.pets = pets; 
  }
}
