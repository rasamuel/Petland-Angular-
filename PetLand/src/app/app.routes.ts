import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing/landing.component';  // Asegúrate de importar LandingComponent
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

  { path: 'owner-login', component: OwnerLoginComponent },

  { path: 'vet-login', component: VetLoginComponent },

  { path: 'owner-pets-list', component: OwnerPetsListComponent },

  { path: 'active-pets', component: ActivePetsComponent },

  { path: 'inactive-pets', component: InactivePetsComponent },

  { path: 'owner-list', component: OwnerListComponent },

  { path: 'owner-details', component: OwnerDetailsComponent },

  { path: 'owner-edit', component: OwnerEditComponent },

  { path: 'owner-add', component: OwnerAddComponent },
  
  { path: 'pet-list', component: PetListComponent },

  { path: 'pet-details', component: PetDetailsComponent },

  { path: 'pet-edit', component: PetEditComponent },

  { path: 'pet-add', component: PetAddComponent },

  // Ruta para manejar rutas no encontradas (opcional)
  { path: '**', redirectTo: '', pathMatch: 'full' }  // Redirecciona a la página de inicio si la ruta no existe

];
