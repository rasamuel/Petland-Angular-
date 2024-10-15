export class Veterinario {
  id: number;
  correo: string;
  contrasena: string;
  especialidad: string;
  foto: string;
  nombre: string;
  estado: boolean;
  idVeterinario: any;

  constructor(
    id: number = 0,
    correo: string = '',
    contrasena: string = '',
    especialidad: string = '',
    foto: string = '',
    nombre: string = '',
    estado: boolean = true
  ) {
    this.id = id;
    this.correo = correo;
    this.contrasena = contrasena;
    this.especialidad = especialidad;
    this.foto = foto;
    this.nombre = nombre;
    this.estado = estado;
  }
}
