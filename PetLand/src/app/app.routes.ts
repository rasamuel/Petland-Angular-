import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing/landing.component';  // Asegúrate de importar LandingComponent
import { ListComponent } from './pets/list/list.component';


export const routes: Routes = [
  { path: '', component: LandingComponent },  // El componente Landing será la página de inicio
  // CRUD de mascotas
  { path: 'mascotas', component: ListComponent },  // Lista de mascotas

  // Ruta para manejar rutas no encontradas (opcional)
  { path: '**', redirectTo: '', pathMatch: 'full' }  // Redirecciona a la página de inicio si la ruta no existe
];
