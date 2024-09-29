import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { ServicesComponent } from "../servicios/services.component";
import { BranchesComponent } from "../branches/branches.component";
import { FaqComponent } from "../faq/faq.component";
import { SubNavbarComponent } from "../sub-navbar/sub-navbar.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavbarComponent, CarouselComponent, AboutUsComponent, ServicesComponent, BranchesComponent, FaqComponent, SubNavbarComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
