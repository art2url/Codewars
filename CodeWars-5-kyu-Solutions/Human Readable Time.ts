/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

export function humanReadable(seconds: number): string {
  const pad = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
}

humanReadable(0); // '00:00:00'
humanReadable(5); // '00:00:05'
humanReadable(60); // '00:01:00'
humanReadable(86399); // '23:59:59'
humanReadable(359999); // '99:59:59'
