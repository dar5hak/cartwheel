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

test("should return the first element on the first next()", (t) => {
  const iterator = cyclist([42, 16]);
  t.is(iterator.next().value, 42);
});

test("should return the first element on the first previous()", (t) => {
  const iterator = cyclist([42, 16]);
  t.is(iterator.previous().value, 42);
});
