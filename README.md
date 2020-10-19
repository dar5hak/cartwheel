# cartwheel

> A circular list you never knew you needed

cartwheel takes an array (or any array-like/iterable) and gives you a circular iterator. You can ask for the next or previous value any number of times, and it will keep cycling through the list.

## Install

### npm

```sh
npm install cartwheel
```

### &lt;script&gt;

```html
<script src="https://unpkg.com/cartwheel@1.0.0"></script>
```

Or if you want to host it yourself, go to [releases](https://github.com/dar5hak/cartwheel/releases) and download _cartwheel.umd.min.js_. Then:

```html
<script src="cartwheel.umd.min.js"></script>
```

## Usage

```js
import cartwheel from "cartwheel";

// Pass an iterable
const items = ["Ed", "Edd", "Eddy"];
const iterator = cartwheel(items);

// Start iterating
iterator.nextValue();
// Ed

iterator.nextValue();
// Edd

iterator.nextValue();
// Eddy

// It‘s circular, remember?
iterator.nextValue();
// Ed

// Standard ES iterator protocol if you like
iterator.next();
// { value: 'Edd', done: false }

// `done` will always be false though
iterator.next();
// { value: 'Eddy', done: false }

// Rewind
iterator.previousValue();
// Edd

iterator.previousValue();
// Ed

// They see me rollin‘, they hatin‘
iterator.previousValue();
// Eddy

// Iterator protocol again
iterator.previous();
// { value: 'Edd', done: false }
```

## Documentation

`cartwheel(iterable)` returns an iterator object with the following methods:

### `next()`

Returns the next item to what you last accessed. If it is the first call, returns the first item in the iterable. `done` is always false.

Example: `{ value: 42, done: false }`

### `nextValue()`

Same as `next()`, but returns the `value` directly.

### `previous()`

Returns the previous item to what you last accessed. If it is the first call, returns the last item in the iterable. `done` is always false.

Example: `{ value: 1337, done: false }`

### `previousValue()`

Same as `previous()`, but returns the `value` directly.

## FAQ

### Where would I need this?

Anywhere you want to iterate a list of items in a circular “round robin” fashion. Think keyboard-navigable menus, tabs, carousels and typeahead suggestions.

### Does it work with maps, sets or node lists?

Yes. It works with anything that is compatible with [`Array.from()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

### Is it like a circular doubly linked list?

Kind of. It does offer a similar API, but the implementation looks nothing like a linked list.
