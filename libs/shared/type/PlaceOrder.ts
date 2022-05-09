import { BaseRequest, BaseResponse } from "./Base";

export interface PlaceOrderRequest extends BaseRequest {
  side: number,
  price?: number,
  amount?: number,
  stop?: number,
  symbol: string,
}

export interface PlaceOrderResponse extends BaseResponse {
  order_id: string;
  stop_id: string
}
