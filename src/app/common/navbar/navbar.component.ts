import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  @Input() logoImage = '/assets/logo_superquiz.png';

  @Input() user = {name: 'Bob'};
  @Input() navItems: any[];

  constructor() { }

  ngOnInit() {
  }

}
