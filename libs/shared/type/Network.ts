
export type NetworkStatusType = 'off' | '2g' | '3g' | '4g';

export interface NetworkType {
    online?: boolean;
    since?: number;
    downlink?: number;
    rtt?: number;
    effectiveType?: NetworkStatusType;
    saveData?: boolean;
}
