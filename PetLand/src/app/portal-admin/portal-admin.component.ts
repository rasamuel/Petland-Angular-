import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';

@Component({
  selector: 'app-portal-admin',
  standalone: true,
  imports: [AdminNavbarComponent],
  templateUrl: './portal-admin.component.html',
  styleUrl: './portal-admin.component.css'
})
export class PortalAdminComponent {

}
