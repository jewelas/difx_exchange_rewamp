  export interface VerifyIpRequest {
    email: string;
    activationCode: string;
  }

  export interface VerifyIpResponse {
    statusCode: string;
    statusText: string
  }
  