import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../services/auth-guard.service';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{path: '', component: AdminComponent, pathMatch: 'full'}];



@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [AdminComponent],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AdminModule { }
