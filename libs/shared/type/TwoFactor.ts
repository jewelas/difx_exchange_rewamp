  export interface TwoFactorRequest {
    code: string;
    sessionId: string;
    rememberMe: boolean;
  }

  export interface TwoFactorResponse {
    statusCode: string;
    statusText: string
  }
  