import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard';
  navItems = [
    {label: 'Accueil', path: 'home'},
  //  {label: 'Quizzes', path: 'quizzes'},
    {label: 'Admin', path: 'admin'},
    {label: 'Login', path: 'login'}
  ];
  user: User;



}
