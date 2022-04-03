  export interface UserRequest {
    email: string;
    password: string;
  }

  export interface UserResponse {
    statusCode: string;
    token: string;
  }
  