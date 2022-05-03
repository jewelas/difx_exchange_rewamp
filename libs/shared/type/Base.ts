
export interface BaseRequest {
  headers?: { 'x-access-token': string }
}
export interface BaseResponse {
  statusCode: string;
  statusText: string;
}
