  export interface TwoFactorRequest {
    code: string;
    sessionId: string;
    rememberMe: boolean;
  }

  export interface TwoFactorResponse {
    statusCode: string;
    statusText: string;

    corp_kyc: boolean;
    email: string;
    emailverified: boolean;
    firstname: string;
    kycverified: boolean;
    lastname: string;
    token: string;
    twofaenabled: boolean;
    type: 'IND' | 'BUS'




  }
  