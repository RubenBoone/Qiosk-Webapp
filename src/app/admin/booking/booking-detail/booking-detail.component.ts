import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../../user/users-table/company';
import { Booking } from '../booking-table/booking';
import { BookingService } from '../booking.service';
import { UserBooking } from '../user-booking';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.scss'],
})
export class BookingDetailComponent implements OnInit {
  company: Company = { companyID: 0, name: '' };
  userBooking: UserBooking = { userID: 0, bookingID: 0, userBookingID: 0 };
  booking: Booking = {
    bookingID: 0,
    bookingTime: new Date(),
    companyId: 0,
    company: this.company,
    userBooking: this.userBooking,
  };

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    const bookingId = this.route.snapshot.paramMap.get('id');
    console.log(bookingId);

    if (bookingId != null) {
      this.bookingService.getBooking(Number(bookingId)).subscribe(
        (result) => {
          this.booking = result;
        },
        (error) => {
          console.log('Error while loading booking');
        }
      );
    }
  }
}
