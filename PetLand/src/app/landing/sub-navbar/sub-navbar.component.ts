import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // Para las rutas

@Component({
  selector: 'app-sub-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sub-navbar.component.html',
  styleUrls: ['./sub-navbar.component.css']
})
export class SubNavbarComponent { }
