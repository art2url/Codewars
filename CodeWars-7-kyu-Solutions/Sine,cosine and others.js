/*
Given value of sine,implement function which will return sine,cosine,tangent,and cotangent in list. order must be same as in the description and every number must be rounded to 2 decimal places.If tangent or cotangent can not be calculated just don't contain them in result list.

Trygonometry - https://en.wikipedia.org/wiki/Trigonometry
*/

function sctc(sin) {
  const format = (num) => Math.round(num * 100) / 100;

  const result = [format(sin)];

  const cosine = Math.sqrt(1 - sin ** 2);
  result.push(format(cosine));

  if (cosine !== 0) {
    const tangent = sin / cosine;
    result.push(format(tangent));
  }

  if (sin !== 0) {
    const cotangent = cosine / sin;
    result.push(format(cotangent));
  }

  return result;
}

sctc(1); // [1, 0.0, 0.0]
sctc(0.5); // [0.5, 0.87, 0.58, 1.73]
sctc(Math.sqrt(3) / 2); // [0.87, 0.5, 1.73, 0.58]
sctc(Math.sqrt(2) / 2); // [0.71, 0.71, 1.0, 1.0]
sctc(0); // [0, 1.0, 0.0]
sctc(0.22); // [0.22, 0.98, 0.23, 4.43]
sctc(0.15); // [0.15, 0.99, 0.15, 6.59]
sctc(0.18); // [0.18, 0.98, 0.18, 5.46]
sctc(0.2); // [0.2, 0.98, 0.2, 4.9]
sctc(0.1); // [0.1, 0.99, 0.1, 9.95]
