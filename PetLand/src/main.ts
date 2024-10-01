import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { routes } from './app/app.routes';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Proveer las rutas
    importProvidersFrom(HttpClientModule) // Asegurar que HttpClientModule esté disponible en toda la aplicación
  ]
});
