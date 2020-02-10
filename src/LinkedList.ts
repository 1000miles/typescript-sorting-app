import { Sorter } from './Sorter';

class Node {
  // By defaut next will be null
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  // LinkedList starts at null
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }
    // First node in the chain
    let tail = this.head;

    // While loop stops at last node
    // that does not have a 'next' property
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;

    while (node.next) {
      length++;
      // Update node and point to the next node in the chain
      node = node.next;
    }
    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    // Count from first node
    let counter = 0;
    let node: Node | null = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      // Node can be either node or null
      // if it's the last element in the chain
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if (!this.head) return;

    let node: Node | null = this.head;

    while(node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
