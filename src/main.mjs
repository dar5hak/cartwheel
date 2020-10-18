class CyclistIterator {
  currentIndex = 0;

  constructor(elements) {
    this.elements = elements;
  }

  next() {
    this.currentIndex =
      this.currentIndex === this.elements.length ? 0 : this.currentIndex;

    return { value: this.elements[this.currentIndex++], done: false };
  }

  previous() {
    this.currentIndex =
      this.currentIndex === -1 ? this.elements.length - 1 : this.currentIndex;
    return { value: this.elements[this.currentIndex--], done: false };
  }
}

function cyclist(iterable) {
  const elements = Array.from(iterable);
  return new CyclistIterator(elements);
}

export default cyclist;
