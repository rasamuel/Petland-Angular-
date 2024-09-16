export class Pet {
  id: number;
  nombre: string;
  raza: string;
  edad: number;
  peso: number;
  enfermedad: string;
  estado: boolean;
  imageUrl: string;

  constructor(
    id: number = 0,
    nombre: string = '',
    raza: string = '',
    edad: number = 0,
    peso: number = 0,
    enfermedad: string = '',
    estado: boolean = true,
    imageUrl: string = ''
  ) {
    this.id = id;
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
    this.peso = peso;
    this.enfermedad = enfermedad;
    this.estado = estado;
    this.imageUrl = imageUrl;
  }
}
