import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'intranet', loadChildren: () => import('./modules/login/login.routes').then(m => m.loginRoutes) },
  { path: 'intranet/admin', loadChildren: () => import('./modules/admin/admin.routes').then(m => m.adminRoutes) },
  { path: '', redirectTo: 'intranet', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
