import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthVeterinarioService {
  private currentVeterinarioId: number | null = null; // Solo almacena el ID

  // Guardar el ID del veterinario autenticado
  login(veterinarioId: number): void {
    console.log('Veterinario ID antes de guardar:', veterinarioId); // Verifica el ID
    this.currentVeterinarioId = veterinarioId; // Guarda el ID en la variable
    localStorage.setItem('veterinarioId', JSON.stringify(veterinarioId)); // Guarda solo el ID en localStorage
    console.log('Veterinario ID guardado en localStorage:', localStorage.getItem('veterinarioId')); // Verifica que se haya guardado
}


  // Obtener el ID del veterinario autenticado
  getVeterinarioId(): number | null {
    // Recupera el ID de localStorage
    const storedVeterinarioId = localStorage.getItem('veterinarioId');
    console.log('Veterinario ID en localStorage:', storedVeterinarioId); // Verifica qué hay en localStorage

    if (storedVeterinarioId) {
      const veterinarioId = JSON.parse(storedVeterinarioId); // Convierte la cadena a número
      console.log('Veterinario ID recuperado:', veterinarioId); // Verifica el ID recuperado
      return veterinarioId; // Devuelve el ID
    }

    console.log('No se encontró un veterinario ID en localStorage.'); // Mensaje si no se encuentra
    return null; // Devuelve null si no hay un ID
  }

  // Cerrar sesión
  logout(): void {
    this.currentVeterinarioId = null;
    localStorage.removeItem('veterinarioId'); // Elimina solo el ID
  }
}
