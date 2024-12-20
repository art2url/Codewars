/*
You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
*/

function explode(x) {
  let result = [];

  const sum = (arr) => arr[0] + arr[1];

  const pushExtraArr = (arr, times) => {
    for (let i = 0; i < times; i++) {
      result.push(arr);
    }
  };

  if (typeof x[0] === 'number' && typeof x[1] === 'number') {
    pushExtraArr(x, sum(x));
  } else if (typeof x[0] === 'number') {
    pushExtraArr(x, x[0]);
  } else if (typeof x[1] === 'number') {
    pushExtraArr(x, x[1]);
  } else {
    return 'Void!';
  }

  return result;
}

explode([9, 3]); // [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]
explode(['a', 3]); // [['a', 3], ['a', 3], ['a', 3]]
explode([6, 'c']); // [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]
explode(['a', 'b']); // 'Void!'
explode(['a', 0]); // []
