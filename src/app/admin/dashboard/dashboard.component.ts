import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { Kiosk } from '../kiosk/kiosk-table/kiosk';
import { Booking } from './booking';
import { BookingService } from './booking.service';
import { KioskService } from './kiosk.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bookings: Booking[] = [];
  numberVisitors:number = 0;
  kiosks:Kiosk[]=[];

  loading$ = this.loader.loading$;
  kiosks$: Subscription = new Subscription();
  bookings$: Subscription = new Subscription();
  constructor(  private loader: LoadingService,private ks:KioskService, private bs:BookingService) { }

  async ngOnInit(): Promise<void> {
    this.loader.show();
    await new Promise(f => setTimeout(f, 500));
    this.getBookingsDash(); this.getKiosksDash();
    this.loader.hide();
  }
  getKiosksDash() {

      this.kiosks$ = this.ks.getKiosksDash().subscribe(results => {
        this.kiosks=results;
      });
    }
      getBookingsDash() {
      this.bookings$ = this.bs.getBookingsDash().subscribe(results => {
        this.bookings=results;
      });
    }


  ngOnDestroy(): void {
    this.bookings$.unsubscribe();
    this.kiosks$.unsubscribe();
  }
  }


