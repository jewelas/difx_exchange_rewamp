
export function getCurrentTimeByDateString(dateString: string): string {
  const localDate = new Date(dateString);

  // British English uses 24-hour time without AM/PM, use 'en-GB' to return time with format HH:mm:ss
  return localDate.toLocaleTimeString('en-GB');
}

export function getCurrentDateTimeByDateString(dateString: string): string {
  const localDate = new Date(dateString);
  return localDate.toLocaleString();
}

export function getDaysBetweenDates(from:Date, to:Date):number {
  return from.getTime() - to.getTime()/(1000 * 3600 * 24);
}