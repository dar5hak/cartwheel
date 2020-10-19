class Iterator {
	constructor(elements) {
		this.elements = elements;
		this.current = -1;
	}

	cycleBack() {
		this.current = this.current === this.elements.length ? 0 : this.current;
		this.current =
			this.current < 0 ? this.elements.length - 1 : this.current;
	}

	next() {
		this.current++;
		this.cycleBack();
		return {value: this.elements[this.current], done: false};
	}

	previous() {
		this.current--;
		this.cycleBack();
		return {value: this.elements[this.current], done: false};
	}

	nextValue() {
		return this.next().value;
	}

	previousValue() {
		return this.previous().value;
	}
}

function cartwheel(iterable) {
	const elements = Array.from(iterable);
	return new Iterator(elements);
}

export default cartwheel;
