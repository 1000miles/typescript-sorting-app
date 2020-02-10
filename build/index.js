"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { Sorter } from './Sorter';
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([200, 3, -5, 0]);
numbersCollection.sort(); // Fix: Can not ceate instance on abstract class
console.log(numbersCollection.data);
var charactersCollection = new CharactersCollection_1.CharactersColllection('Xaayb');
charactersCollection.sort(); // Fix: Can not ceate instance on abstract class
console.log(charactersCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort(); // Fix: Can not ceate instance on abstract class
linkedList.print();
// [start:run] -10
// [start:run] -3
// [start:run] 4
// [start:run] 500
