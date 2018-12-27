import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  currentUser: User;
  constructor(private authService: AuthService) {
      this.authService.getCurrentUser().subscribe((usr) => this.currentUser = usr);
   }

  ngOnInit() {
  }

}
