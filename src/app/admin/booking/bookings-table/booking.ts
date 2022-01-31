import { Company } from '../../user/users-table/company';

export interface Booking {
  bookingID: number;
  bookingTime: Date;
  companyId: number;
  company: Company;
}
