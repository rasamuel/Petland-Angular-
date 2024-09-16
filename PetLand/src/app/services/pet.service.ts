import { Injectable } from '@angular/core';
import { Pet } from '../models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private pets: Pet[] = [
    { id: 1, nombre: 'Fido', raza: 'Labrador', edad: 5, peso: 20, enfermedad: 'None', estado: true, imageUrl: 'url1' },
    { id: 2, nombre: 'Max', raza: 'Bulldog', edad: 3, peso: 15, enfermedad: 'Artritis', estado: false, imageUrl: 'url2' }
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
