export class Veterinario {
    id: number;
    contrasena: string;
    especialidad: string;
    foto: string;
    nombre: string;
  
    constructor(
      id: number = 0,
      contrasena: string = '',
      especialidad: string = '',
      foto: string = '',
      nombre: string = ''
    ) {
      this.id = id;
      this.contrasena = contrasena;
      this.especialidad = especialidad;
      this.foto = foto;
      this.nombre = nombre;
    }
  }
  