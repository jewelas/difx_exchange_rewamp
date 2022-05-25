
// e.g:  09:51:32
export function getCurrentTimeByDateString(dateString: string, excludeSec:boolean = false): string {

  let options:any = {};
  if(excludeSec){
    options = { hour: '2-digit', minute: '2-digit' };
  }

  const localDate = new Date(dateString);

  // British English uses 24-hour time without AM/PM, use 'en-GB' to return time with format HH:mm:ss
  return localDate.toLocaleTimeString('en-GB', options);
}

// e.g:  22-05-24
export function getCurrentDateByDateString(dateString:string): string {
  const options: any = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit"
  };

  const localDate = new Date(dateString);
  return localDate.toLocaleDateString('sv-SE', options);
}

// e.g:  5/24/2022, 9:50:34 AM
export function getCurrentDateTimeByDateString(dateString:string): string {
  const localDate = new Date(dateString);
  return localDate.toLocaleString();
}

export function getDaysBetweenDates(from: Date, to: Date): number {
  return from.getTime() - to.getTime() / (1000 * 3600 * 24);
}