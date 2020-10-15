import test from "ava";
import Cyclist from "..";

test("Cyclist is exported correctly", (t) => {
  t.is(typeof Cyclist, "function");
});
