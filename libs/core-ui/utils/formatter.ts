export const formatNumber = (value: number, type?: string): string => {
  if (!type) type = "0.01";
  let numberFormatted = 0.0;
  let digit = 2;
  if (type === "0.01") {
    numberFormatted = Number(value.toFixed(2));
    digit = 2;
  } else if (type === "0.1") {
    numberFormatted = Number(value.toFixed(1));
    digit = 1;
  } else if (type === "1") {
    numberFormatted = value;
    digit = 0;
  } else if (type === "10") {
    numberFormatted = Math.round(value / 10) * 10;
    digit = 0;
  }
  if (numberFormatted !== 0.0)
    return numberFormatted.toLocaleString("en-us", {
      maximumFractionDigits: digit,
      minimumFractionDigits: digit,
    });
  return numberFormatted.toString();
};
