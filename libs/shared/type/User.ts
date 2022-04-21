export interface User {
  token: string;
  firstname: string;
  lastname: string;
  email: string;
  emailverified: boolean;
  kycverified: boolean;
  corp_kyc: boolean;
  type: "IND" | "BUS";
}
