import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  @Input() logoImage = '/assets/logo_superquiz.png';

  @Input() user: User;
  @Input() navItems: any[];

  constructor() { }

  ngOnInit() {
  }

}
