import { Routes } from '@angular/router';
import { CarouselComponent } from './landing/carousel/carousel.component';
import { AboutUsComponent } from './landing/about-us/about-us.component';
import { ServicesComponent } from './landing/servicios/services.component';
import { BranchesComponent } from './landing/branches/branches.component';
import { FaqComponent } from './landing/faq/faq.component';
import { ListComponent } from './pets/list/list.component';
import { DetailComponent } from './pets/detail/detail.component';
import { FormComponent } from './pets/form/form.component';

export const routes: Routes = [
  { path: '', component: CarouselComponent }, // Página de inicio
  { path: 'servicios', component: ServicesComponent },
  { path: 'quienes-somos', component: AboutUsComponent },
  { path: 'nuestras-sedes', component: BranchesComponent },
  { path: 'faq', component: FaqComponent },
  
  // CRUD de mascotas
  { path: 'mascotas', component: ListComponent },  // Lista de mascotas
  { path: 'mascotas/agregar', component: FormComponent },  // Agregar mascota
  { path: 'mascotas/:id', component: DetailComponent },  // Detalle de una mascota
  { path: 'mascotas/:id/editar', component: FormComponent },  // Editar mascota

  // Ruta para manejar rutas no encontradas (opcional)
  { path: '**', redirectTo: '', pathMatch: 'full' }  // Redirecciona a la página de inicio si la ruta no existe
];
