
export function getCurrentTimeByDateString(dateString): string {
  const localDate = new Date(dateString);

  // British English uses 24-hour time without AM/PM, use 'en-GB' to return time with format HH:mm:ss
  return localDate.toLocaleTimeString('en-GB');
}
