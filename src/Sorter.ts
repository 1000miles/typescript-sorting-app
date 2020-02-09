import { NumbersCollection } from './NumbersCollection';

export class Sorter {
  // Way 1:
  // collection: number[];

  // constructor(collection: number[]) {
  //   this.collection = collection;
  // }

  // Way 2: Aquivalent to way 1
  constructor(public collection: NumbersCollection) {}

  // We don't return anything here
  sort(): void {
    const { length } = this.collection;

    /**
     * BUBBLE SORT: Compare a pair of elements (number) per each iteration
     * in ascending order (default)
     */
    // First loop
    for (let i = 0; i < length; i++) {
      // Second loop: right most element will be in the sorted position after first iteration is done which is why "i -1" is substracted here from length
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
};
