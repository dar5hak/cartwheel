import test from "ava";
import Cyclist from "..";

test("Cyclist is exported correctly", (t) => {
  t.is(typeof Cyclist, "function");
});

test("returns an array on toArray()", (t) => {
  const list = new Cyclist();
  t.true(Array.isArray(list.toArray()));
});

test("adds an element on add()", (t) => {
  const list = new Cyclist();
  list.add(42);
  list.add(16);
  t.deepEqual(list.toArray(), [42, 16]);
});
