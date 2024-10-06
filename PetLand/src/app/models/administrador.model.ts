export class Administrador {
  private _id: number;
  private _contrasena: string;
  private _nombre: string;
  private _correo: string;
  private _telefono: string;

  constructor(
    id: number = 0,
    contrasena: string = '',
    nombre: string = '',
    correo: string = '',
    telefono: string = ''
  ) {
    this._id = id;
    this._contrasena = contrasena;
    this._nombre = nombre;
    this._correo = correo;
    this._telefono = telefono;
  }

  // Getters y Setters
  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get contrasena(): string {
    return this._contrasena;
  }

  set contrasena(contrasena: string) {
    this._contrasena = contrasena;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(nombre: string) {
    this._nombre = nombre;
  }

  get correo(): string {
    return this._correo;
  }

  set correo(correo: string) {
    this._correo = correo;
  }

  get telefono(): string {
    return this._telefono;
  }

  set telefono(telefono: string) {
    this._telefono = telefono;
  }
}
