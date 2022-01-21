import {User} from './user';

export interface UserResponse {
  userID: number;
  firstName:string;
  lastName:string;
  email: string;
  password: string;
  isActive:boolean;
  isAdmin:boolean;
  token: string;
}
