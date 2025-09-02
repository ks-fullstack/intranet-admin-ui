import { Routes } from '@angular/router';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

export const loginRoutes: Routes = [
  { path: 'login', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
