import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';

@Component({
  selector: 'app-portal-admin',
  standalone: true,
  imports: [AdminNavbarComponent, RouterModule],
  templateUrl: './portal-admin.component.html',
  styleUrl: './portal-admin.component.css'
})
export class PortalAdminComponent {

}
