import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './common/home/home.component';
import { FooterComponent } from './common/footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './common/login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { environment } from 'src/environments/environment';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  /*{
    path: 'admin',
    loadChildren: 'src/app/admin/admin.module#AdminModule',
    //loadChildren=>lazyLoading, par contre le module doit etre précisé à la fin après le#
    canActivate: [AuthGuard]
  }*/
];


@NgModule({
  declarations: [
    AppComponent, NavbarComponent, HomeComponent, FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService,
  AuthGuard,
  {provide: 'SETTING', useValue: environment}],
  bootstrap: [AppComponent]
})
export class AppModule { }
