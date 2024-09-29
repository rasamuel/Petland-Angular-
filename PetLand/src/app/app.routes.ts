import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing/landing.component';  // Asegúrate de importar LandingComponent
import { ListComponent } from './pets/list/list.component';
import { FormComponent } from './pets/form/form.component';
import { DetailComponent } from './pets/detail/detail.component';
import { PortalVeterinarioComponent } from './portal-veterinario/portal-veterinario.component';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { VetLoginComponent } from './vet-login/vet-login.component';
import { OwnerPetsListComponent } from './owner-pets-list/owner-pets-list.component';


export const routes: Routes = [
  { path: '', component: LandingComponent },  // El componente Landing será la página de inicio
  // CRUD de mascotas
  { path: 'mascotas', component: ListComponent },  // Lista de mascotas

  { path: 'mascotas/agregar', component: FormComponent },  // Formulario de agregar mascota

  // Ruta para ver detalles de una mascota
  { path: 'mascotas/:id', component: DetailComponent },  // Detalles de una mascota por su ID

  // Ruta para editar una mascota
  { path: 'mascotas/:id/editar', component: FormComponent },  // Editar mascota por su ID

  { path: 'portal-veterinario', component: PortalVeterinarioComponent },

  { path: 'owner-login', component: OwnerLoginComponent },

  { path: 'vet-login', component: VetLoginComponent },

  { path: 'owner-pets-list', component: OwnerPetsListComponent },

  // Ruta para manejar rutas no encontradas (opcional)
  { path: '**', redirectTo: '', pathMatch: 'full' }  // Redirecciona a la página de inicio si la ruta no existe

];
