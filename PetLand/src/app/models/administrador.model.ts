export class Administrador {
    id: number;
    contrasena: string;
    nombre: string;
    correo: string;
    telefono: string;
  
    constructor(
      id: number = 0,
      contrasena: string = '',
      nombre: string = '',
      correo: string = '',
      telefono: string = ''
    ) {
      this.id = id;
      this.contrasena = contrasena;
      this.nombre = nombre;
      this.correo = correo;
      this.telefono = telefono;
    }
  }
  