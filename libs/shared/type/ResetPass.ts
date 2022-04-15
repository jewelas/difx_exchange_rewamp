export interface ResetPassRequest {
  email: string;
  activationcode: string;
  password: string;
  rpassword: string;
}

export interface ResetPassResponse {
  statusCode: string;
  statusText: string;
}
