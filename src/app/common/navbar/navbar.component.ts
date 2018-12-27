import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  @Input() logoImage = '/assets/pimkie_logo_white.svg';
  currentUser: User;
  @Input()logOutFunction: any;
  @Input() navItems: any[];

  constructor(private authService: AuthService) {
    this.authService.getCurrentUser().subscribe((usr) => {this.currentUser = usr; console.log(usr); console.log(this.currentUser); });
  }

  ngOnInit() {}

}
