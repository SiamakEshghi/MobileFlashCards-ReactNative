export function getTime() {
  const timestamp = new Date().getUTCMilliseconds();
  return timestamp;
}
