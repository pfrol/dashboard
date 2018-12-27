import { Component } from '@angular/core';
import { User } from './models/user';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Skeleton';
  navItems = [
    {label: 'Accueil', path: 'home', visible: 'always'},
    {label: 'Admin', path: 'admin', visible: 'loggedIn'},
    {label: 'Login', path: 'login', visible: 'loggedOut'}
  ];
  currentUser: User;
  routes: Router;
  logo = '/assets/pimkie_logo_white.svg';

  constructor(private router: Router,
    private authService: AuthService) {
    this.authService.getCurrentUser().subscribe((usr) => this.currentUser = usr);
  }

  logout() {
    this.authService.signOut();
    // this.routes.navigate(['/login']);
}

}
