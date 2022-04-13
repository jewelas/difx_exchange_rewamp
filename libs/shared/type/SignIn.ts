  import {User} from './User';
  export interface SignInRequest {
    dial_code?: string;
    phonenumber?: string;
    email?: string;
    password: string;
    usertype: 'IND' | 'BUS';
  }

  export interface SignInResponse extends User {
    statusCode: string;
    statusText: string;
    sessionId: string;
  }
  