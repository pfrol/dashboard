import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './common/home/home.component';
import { FooterComponent } from './common/footer/footer.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  /*{ path: 'login', component: LoginComponent },
  {
    path: 'admin',
    loadChildren: 'src/app/admin/admin.module#AdminModule',//loadChildren=>lazyLoading, par contre le module doit etre précisé à la fin après le#
    canActivate: [AuthGuard]
  }*/
];


@NgModule({
  declarations: [
    AppComponent,NavbarComponent,HomeComponent,FooterComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
