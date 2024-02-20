// Neatly converts a unix timestamp to a time string
// Examples:
//  unixToDate(1632604800000) => "8:00 AM"
export const getTime = (unix: number) => {
  const date = new Date(unix);
  return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
}

export const getDate = (unix: number) => {
  const date = new Date(unix);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}