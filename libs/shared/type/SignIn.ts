  export interface SignInRequest {
    phonenumber?: string;
    email?: string;
    password: string;
  }

  export interface SignInResponse {
    statusCode: string;
    statusText: string;
    sessionId: string;


    token: string;
    firstname: string;
    lastname: string;
    email: string;
    emailverified: boolean;
    kycverified: boolean;
    corp_kyc: boolean;
    type: 'IND' | 'BUS'
  }
  