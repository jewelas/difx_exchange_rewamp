
export interface BaseRequest {
  endpoint?: string;
  headers?: { 'x-access-token': string }
}
export interface BaseResponse {
  statusCode: string;
  statusText: string;
}
