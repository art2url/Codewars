/*
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
*/

export function twiceAsOld(dadYearsOld: number, sonYearsOld: number): number {
  const result = Math.abs(dadYearsOld - sonYearsOld * 2);

  return result;
}

twiceAsOld(36, 7); // 22
twiceAsOld(55, 30); // 5
twiceAsOld(40, 20); // 2
