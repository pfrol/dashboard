import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  // Component state
  isLoading = true;
  currentUser: User;
  loginForm: FormGroup;

  constructor(private router: Router,
              private authService: AuthService,
              private pb: FormBuilder ) {
  }

  ngOnInit() {
    this.loginForm = this.pb.group({
      login: ['', Validators.required],
      password : ['', Validators.required]
    });
    this.authService.getCurrentUser()
      .subscribe(user => {
        this.currentUser = user;
        this.isLoading = false;
      },
        error => {
          });
  }

  doLogin() {
    this.authService.signIn()
      .subscribe(user => {
        if (user) {
          // this.gotoAdmin();
        }
      });
  }

  doLogout() {
    this.authService.signOut()
      .subscribe(() => {
        alert('Vous êtes déconnecté(e).');
      });
  }

  // Redirect the user to the admin homepage.
  /*gotoAdmin(event?: Event) {
    if (event) { event.preventDefault(); }
    this.router.navigate(['/admin']);
  }*/
}
