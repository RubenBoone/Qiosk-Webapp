import { Company } from '../../user/users-table/company';
import { UserBooking } from '../user-booking';

export interface Booking {
  bookingID: number;
  bookingTime: Date;
  companyId: number;
  company: Company;
  userBooking: UserBooking;
}
