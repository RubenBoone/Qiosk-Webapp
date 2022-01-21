export interface User {
  userID: number;
  email: string;
  password: string;
  isActive:boolean;
  isAdmin:boolean;
  token: string;
}
