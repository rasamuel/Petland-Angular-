export class Medicamento {
    id: number;
    nombre: string;
    precioCompra: number;
    precioVenta: number;
    unidadesDisponibles: number;
    unidadesVendidas: number;
  
    constructor(
      id: number = 0,
      nombre: string = '',
      precioCompra: number = 0,
      precioVenta: number = 0,
      unidadesDisponibles: number = 0,
      unidadesVendidas: number = 0
    ) {
      this.id = id;
      this.nombre = nombre;
      this.precioCompra = precioCompra;
      this.precioVenta = precioVenta;
      this.unidadesDisponibles = unidadesDisponibles;
      this.unidadesVendidas = unidadesVendidas;
    }
  }
  