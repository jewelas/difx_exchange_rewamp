export function getNetworkStatus(waitTime: number) {
    if (waitTime < 500) return 'fast'
    else if (waitTime > 500 && waitTime < 1000) return 'medium'
    else if (waitTime >= 1000) return 'weak'
}