import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './dashboard/account-details/navbar/navbar.component';
import { LoginComponent } from './userdata/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent,NavbarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular17-TestAutomation';

  showNavbar: boolean = true;
  constructor(private router:Router){
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => {
      this.showNavbar = !['/paymentDashboard', '/accountDashboard','/transferDashboard'].includes(event.urlAfterRedirects);
    });
  }
}
