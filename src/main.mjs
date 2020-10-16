class Cyclist {
  elements = [];

  add(element) {
    this.elements.push(element);
  }

  toArray() {
    return this.elements;
  }
}

export default Cyclist;
