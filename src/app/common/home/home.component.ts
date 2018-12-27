import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  appName = 'Skeleton';
  currentUser: User;

  constructor(private authService: AuthService) {
    this.authService.getCurrentUser().subscribe((usr) => this.currentUser = usr );
  }

  ngOnInit() {}

}
