import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './landing/navbar/navbar.component';
import { CarouselComponent } from './landing/carousel/carousel.component';
import { AboutUsComponent } from './landing/about-us/about-us.component';
import { ServicesComponent } from './landing/servicios/services.component';
import { BranchesComponent } from './landing/branches/branches.component';
import { FooterComponent } from './landing/footer/footer.component';
import { FaqComponent } from './landing/faq/faq.component';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from "./pets/list/list.component";
import { FormComponent } from "./pets/form/form.component";
import { DetailComponent } from "./pets/detail/detail.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NavbarComponent,
    CarouselComponent,
    AboutUsComponent,
    ServicesComponent,
    BranchesComponent,
    FooterComponent,
    FaqComponent ,
    ListComponent,
    FormComponent,
    DetailComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PetLand';
}
