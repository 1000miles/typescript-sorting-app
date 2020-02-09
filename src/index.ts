class Sorter {
  // Way 1:
  // collection: number[];

  // constructor(collection: number[]) {
  //   this.collection = collection;
  // }

  // Way 2:
  constructor(public collection: number[]) {

  }

  sort(): void {

  }
};

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
