import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingService } from './booking/bookings-table/booking.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KioskService } from './kiosk-table/kiosk.service';
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
    path: 'users',
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
    path: 'booking',
    loadChildren: () =>
      import('./booking/booking.module').then((m) => m.BookingModule),
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'tags',
    loadChildren: () => import('./tag/tag.module').then((m) => m.TagModule),
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    KioskService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true,
    },
  ],
})
export class AdminRoutingModule {}
