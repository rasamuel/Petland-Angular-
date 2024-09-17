import { Injectable } from '@angular/core';
import { Pet } from '../models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private pets: Pet[] = [
    { id: 1, nombre: 'Fido', raza: 'Labrador', edad: 5, peso: 20, enfermedad: 'None', estado: true, imageUrl: 'url1' },
    { id: 2, nombre: 'Max', raza: 'Bulldog', edad: 3, peso: 15, enfermedad: 'Artritis', estado: false, imageUrl: 'url2' },
    { id: 3, nombre: 'Luna', raza: 'Beagle', edad: 4, peso: 12, enfermedad: 'Alergias', estado: true, imageUrl: 'url3' },
    { id: 4, nombre: 'Rocky', raza: 'Pastor Alemán', edad: 6, peso: 30, enfermedad: 'Displasia de cadera', estado: false, imageUrl: 'url4' },
    { id: 5, nombre: 'Bella', raza: 'Poodle', edad: 2, peso: 8, enfermedad: 'Ninguna', estado: true, imageUrl: 'url5' },
    { id: 6, nombre: 'Charlie', raza: 'Golden Retriever', edad: 7, peso: 32, enfermedad: 'Artritis', estado: false, imageUrl: 'url6' },
    { id: 7, nombre: 'Simba', raza: 'Chihuahua', edad: 1, peso: 3, enfermedad: 'Ninguna', estado: true, imageUrl: 'url7' },
    { id: 8, nombre: 'Milo', raza: 'Boxer', edad: 5, peso: 28, enfermedad: 'Epilepsia', estado: true, imageUrl: 'url8' },
    { id: 9, nombre: 'Toby', raza: 'Rottweiler', edad: 6, peso: 40, enfermedad: 'Problemas cardíacos', estado: false, imageUrl: 'url9' },
    { id: 10, nombre: 'Nala', raza: 'Husky Siberiano', edad: 4, peso: 25, enfermedad: 'Ninguna', estado: true, imageUrl: 'url10' }
  ];
  

  getPets(): Pet[] {
    return this.pets;
  }

  getPetById(id: number): Pet | undefined {
    return this.pets.find(p => p.id === id);
  }

  addPet(pet: Pet) {
    const maxId = this.pets.length > 0 ? Math.max(...this.pets.map(p => p.id)) : 0;
    pet.id = maxId + 1;
    this.pets.push(pet);
  }
  

  updatePet(updatedPet: Pet) {
    const index = this.pets.findIndex(p => p.id === updatedPet.id);
    if (index > -1) {
      this.pets[index] = updatedPet;
    }
  }

  deletePet(id: number) {
    this.pets = this.pets.filter(p => p.id !== id);
  }
}
