"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([200, 3, -5, 0]);
// numbersCollection.sort(); // Fix: Can not ceate instance on abstract class
// // const sorter = new Sorter(numbersCollection);
// // sorter.sort();
// console.log(numbersCollection.data);
// const charactersCollection = new CharactersColllection('Xaayb');
// charactersCollection.sort(); // Fix: Can not ceate instance on abstract class
// // Pass in charactersCollection with Sortable interface
// // const sorter = new Sorter(charactersCollection);
// // sorter.sort();
// console.log(charactersCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
// const sorter = new Sorter(linkedList);
// sorter.sort();
linkedList.sort(); // Fix: Can not ceate instance on abstract class
linkedList.print();
// [start:run] -10
// [start:run] -3
// [start:run] 4
// [start:run] 500
