export interface User {
  token: {
    accessToken: string,
    refreshToken: string
  };
  firstname: string;
  lastname: string;
  email: string;
  emailverified: boolean;
  kycverified: boolean;
  corp_kyc: boolean;
  type: "IND" | "BUS";
}
