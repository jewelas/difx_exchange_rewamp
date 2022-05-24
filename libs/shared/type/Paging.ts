import { BaseRequest, BaseResponse } from "..";

export interface Paging {
  currentPage: number;
  totalItems: number;
  totalPages: number;
}