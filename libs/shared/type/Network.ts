export type NetworkStatusType = "off" | "2g" | "3g" | "4g";

export interface NetworkType {
  online?: boolean;
  since?: number | undefined;
  downlink?: number;
  rtt?: number;
  effectiveType?: NetworkStatusType;
  saveData?: boolean;
}
