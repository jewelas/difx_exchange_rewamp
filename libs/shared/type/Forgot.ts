  export interface ForgotRequest {
    dial_code:string;
    phonenumber: string;
    email: string;
  }

  export interface ForgotResponse {
    statusCode: string;
    statusText: string;
  }
  