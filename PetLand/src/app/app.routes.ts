import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing/landing.component';
import { PortalVeterinarioComponent } from './portal-veterinario/portal-veterinario.component';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { VetLoginComponent } from './vet-login/vet-login.component';
import { OwnerPetsListComponent } from './owner-pets-list/owner-pets-list.component';
import { ActivePetsComponent } from './active-pets/active-pets.component';
import { InactivePetsComponent } from './inactive-pets/inactive-pets.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { OwnerEditComponent } from './owner-edit/owner-edit.component';
import { OwnerAddComponent } from './owner-add/owner-add.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PetAddComponent } from './pet-add/pet-add.component';

export const routes: Routes = [
  { path: '', component: LandingComponent }, 

  { path: 'portal-veterinario', component: PortalVeterinarioComponent },

  // Rutas para el login de propietarios y veterinarios
  { path: 'login/owner', component: OwnerLoginComponent },  // /login/owner en lugar de /owner-login
  { path: 'login/vet', component: VetLoginComponent },      // /login/vet en lugar de /vet-login

  // Rutas para listar, agregar, editar y ver detalles de dueños
  { path: 'owners', component: OwnerListComponent },           // Lista de propietarios
  { path: 'owners/add', component: OwnerAddComponent },        // Agregar un propietario
  { path: 'owners/:id', component: OwnerDetailsComponent },    // Ver detalles de un propietario
  { path: 'owners/:id/edit', component: OwnerEditComponent },  // Editar un propietario

  // Rutas para listar mascotas del propietario
  { path: 'owner-pets-list/:id', component: OwnerPetsListComponent },  // Componente donde mostrarás las mascotas del dueño

  // Rutas para listar, agregar, editar y ver detalles de mascotas
  { path: 'pets', component: PetListComponent },             // Lista de mascotas
  { path: 'pets/add', component: PetAddComponent },          // Agregar una mascota
  { path: 'pets/:id', component: PetDetailsComponent },      // Ver detalles de una mascota
  { path: 'pets/:id/edit', component: PetEditComponent },    // Editar una mascota
  // Rutas para mascotas activas e inactivas
  { path: 'pets-activas', component: ActivePetsComponent },  // Mascotas activas
  { path: 'pets-inactivas', component: InactivePetsComponent }, // Mascotas inactivas

  // Ruta para manejar rutas no encontradas (opcional)
  { path: '**', redirectTo: '', pathMatch: 'full' }  // Redirecciona a la página de inicio si la ruta no existe
];
