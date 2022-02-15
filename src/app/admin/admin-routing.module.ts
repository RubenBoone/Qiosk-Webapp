import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingService } from './booking/booking.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './security/auth.guard';
import { SecurityInterceptor } from './security/security.interceptor';
import { SecurityComponent } from './security/security/security.component';

const routes: Routes = [
  { path: '', component: SecurityComponent },
  { path: 'login', component: SecurityComponent },
  {
    path: 'logout',
    component: SecurityComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'logout',
    component: SecurityComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'gebruikers',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'boekingen',
    loadChildren: () =>
      import('./booking/booking.module').then((m) => m.BookingModule),
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'bedrijven',
    loadChildren: () =>
      import('./company/company.module').then((m) => m.CompanyModule),
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'tags',
    loadChildren: () => import('./tag/tag.module').then((m) => m.TagModule),
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'kiosks',
    loadChildren: () =>
      import('./kiosk/kiosk.module').then((m) => m.KioskModule),
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'tagusers',
    loadChildren: () =>
      import('./tag-user/tag-user.module').then((m) => m.TagUserModule),
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    BookingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true,
    },
  ],
})
export class AdminRoutingModule {}
