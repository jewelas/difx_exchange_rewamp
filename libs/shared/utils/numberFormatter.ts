// https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900
export function numFormatter(n: number) {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
  return n;
}

export function toFixedNumber(value: number, group_precision: number): string {
  let numberFormatted = 0.0;
  if (group_precision <= -1) {
    numberFormatted = Math.floor(value * Math.pow(10, 2)) / Math.pow(10, 2);
    return numberFormatted.toLocaleString("en-us", {
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    });
  } else {
    const numberFormatted = Math.floor(value * Math.pow(10, group_precision)) / Math.pow(10, group_precision)
    if (Number(numberFormatted) === 0) return value.toString();
    if (Number.isInteger(numberFormatted)) return numberFormatted.toString();
    else return numberFormatted.toFixed(group_precision);
  }
};

export function toRoundDown(value: number, group_precision: number): number {
  if(group_precision <=-1) return 0.00;
  const floorNumber =  Math.floor(value * Math.pow(10, group_precision)) / Math.pow(10, group_precision);
  if(floorNumber === 0) return value;
  else return floorNumber;
};

