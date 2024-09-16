export class Pet {
  constructor(
    public id: number,
    public nombre: string = '',
    public raza: string = '',
    public edad: number = 0,
    public peso: number = 0,
    public enfermedad: string = '',
    public estado: boolean = true,
    public imageUrl: string = ''
  ) {}
}

