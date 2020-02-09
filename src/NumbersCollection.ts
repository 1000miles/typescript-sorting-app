export class NumbersCollection {
  // Way 1:
  // data: number[];

  // constructor(data: number[]) {
  //   this.data = data;
  // }

  // Way 2: Shorthand with modifier
  constructor(public data: number[]) {}

  // Way 1
  length1(): number {
    return this.data.length;
  }

  // Way 2: getter
  get length(): number {
    return this.data.length;
  }

  // Return a boolean after each index element comparison
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}

const collection = new NumbersCollection([1, 2, 3])
collection.length1(); // Functionn call to length();
collection.length; // With getter method no function call here
