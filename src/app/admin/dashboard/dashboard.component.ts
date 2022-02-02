import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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


  kiosks$: Subscription = new Subscription();
  bookings$: Subscription = new Subscription();
  constructor(private ks:KioskService, private bs:BookingService) { }

  ngOnInit(): void {
    this.getBookingsDash(); this.getKiosksDash();
  }
  getKiosksDash() {

      this.kiosks$ = this.ks.getKiosksDash().subscribe(results => {
        this.kiosks=results;
      });
    }
      getBookingsDash() {
      this.bookings$ = this.bs.getBookingsDash().subscribe(results => {
        this.bookings=results;
        console.log(results)
      });
    }


  ngOnDestroy(): void {
    this.bookings$.unsubscribe();
    this.kiosks$.unsubscribe();
  }
  }


