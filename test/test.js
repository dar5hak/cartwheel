import test from "ava";
import cyclist from "..";

test("is a function", (t) => {
  t.is(typeof cyclist, "function");
});

test("returns an iterator object", (t) => {
  const iterator = cyclist([42]);
  t.is(typeof iterator.next, "function");
  t.is(typeof iterator.previous, "function");
});

test("returns the first element on the first next()", (t) => {
  const iterator = cyclist([42, 16]);
  t.is(iterator.next().value, 42);
});

test("returns the first element on the first previous()", (t) => {
  const iterator = cyclist([42, 16]);
  t.is(iterator.previous().value, 42);
});

test("returns the next element on subsequent next()", (t) => {
  const iterator = cyclist([42, 16]);
  iterator.next();
  t.is(iterator.next().value, 16);
});

test("returns the previous element on subsequent previous()", (t) => {
  const iterator = cyclist([42, 16]);
  iterator.next();
  iterator.next();
  t.is(iterator.previous().value, 42);
});

test('cycles back to the first element on next() from the last element', t => {
  const iterator = cyclist([42, 16]);
  iterator.next();
  iterator.next();
  t.is(iterator.next().value, 42);
});

test('cycles back to the last element on previous() from the first element', t => {
  const iterator = cyclist([42, 16]);
  iterator.previous();
  t.is(iterator.previous().value, 16);
});
