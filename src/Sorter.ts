interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  // We don't return anything here
  sort(): void {
    const { length } = this;

    /**
     * BUBBLE SORT: Compare a pair of elements (number) per each iteration
     * in ascending order (default)
     */
    // First loop
    for (let i = 0; i < length; i++) {
      // Second loop: right most element will be in the sorted position after first iteration is done which is why "i -1" is substracted here from length
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
};
