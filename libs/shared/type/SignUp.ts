  export interface SignUpRequest {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    rpassword: string;
    phonenumber: string;
    dial_code: string;
    code?: string;
    agree: boolean;
    usertype: 'IND' | 'BUS';
  }

  export interface SignUpResponse {
    token: string;
    firstname: string;
    lastname: string;
    email: string;
    emailverified: boolean;
    kycverified: boolean;
    corp_kyc: boolean;
    type: 'IND' | 'BUS'
  }
  