/*
As you know, a promise is in one of these states: pending, fulfilled, rejected.

Implement the async function getState that determines a state of a promise.

const p = Promise.resolve();
const state = await getState(p); // === "fulfilled"

const p = Promise.reject();
const state = await getState(p); // === "rejected"

const p = new Promise(() => {});
const state = await getState(p); // === "pending"
*/

async function getState(promise) {
  const uniqueValue = Symbol('unique');

  try {
    const result = await Promise.race([promise, Promise.resolve(uniqueValue)]);

    if (result === uniqueValue) {
      return 'pending';
    }

    return 'fulfilled';
  } catch {
    return 'rejected';
  }
}

const p1 = Promise.resolve();
const p2 = Promise.reject();
const p3 = new Promise(() => {});

(async () => {
  console.log(await getState(p1)); // "fulfilled"
  console.log(await getState(p2)); // "rejected"
  console.log(await getState(p3)); // "pending"
})();
