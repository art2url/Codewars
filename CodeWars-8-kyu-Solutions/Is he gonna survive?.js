/*
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)
*/

function hero(bullets, dragons) {
  let result = false;

  if (bullets === 0 && dragons > 0) {
    return result;
  }

  if (dragons === 0) {
    result = true;
    return result;
  }

  let bulletsNeeded = 0;
  for (let i = 0; i < dragons; i++) {
    bulletsNeeded += 2;
  }

  if (bullets >= bulletsNeeded) {
    result = true;
  } else {
    result = false;
  }

  if (result === true) {
    console.log('Hero has enough bullets to defeat the dragons.');
  } else {
    console.log('Hero does not have enough bullets to defeat the dragons.');
  }

  return result;
}

// const hero = (bullets, dragons) => bullets >= dragons * 2;

function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}

hero(10, 5); // true
hero(7, 4); // false
hero(4, 5); // false
hero(100, 40); // true
hero(1500, 751); // false
hero(0, 1); // false
