import { Routes } from '@angular/router';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

export const loginRoutes: Routes = [
  { path: 'login', component: SignInComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
