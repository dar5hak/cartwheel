class CyclistIterator {
  currentIndex = 0;

  constructor(elements) {
    this.elements = elements;
  }

  cycleBack() {
    this.currentIndex =
      this.currentIndex === this.elements.length ? 0 : this.currentIndex;
    this.currentIndex =
      this.currentIndex === -1 ? this.elements.length - 1 : this.currentIndex;
  }

  next() {
    this.cycleBack();
    return { value: this.elements[this.currentIndex++], done: false };
  }

  previous() {
    this.cycleBack();
    return { value: this.elements[this.currentIndex--], done: false };
  }
}

function cyclist(iterable) {
  const elements = Array.from(iterable);
  return new CyclistIterator(elements);
}

export default cyclist;
