"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([200, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
// const charactersCollection = new CharactersColllection('Xaayb');
// // Pass in charactersCollection with Sortable interface
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
var sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
// [start:run] -10
// [start:run] -3
// [start:run] 4
// [start:run] 500
