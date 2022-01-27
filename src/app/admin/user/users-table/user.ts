import { Company } from "./company";

export interface User {
  userID: number;
  firstName:string;
  lastName:string;
  email: string;
  isActive:boolean;
  isAdmin:boolean;
  companyID:number;
  company:Company;
}
