// https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900
export function numFormatter(n: number) {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
  return n;
}

export function toFixedNumber(value: number, group_precision: number): string{
  let numberFormatted = 0.0;
  if(group_precision<=-1){
    numberFormatted = Math.round(value / 10) * 10;
    return numberFormatted.toLocaleString("en-us", {
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    });
  }else{
    const numberFormatted = Number(value.toFixed(group_precision));
    if(numberFormatted === 0) return value.toString();
    return numberFormatted.toString();
  }
};
