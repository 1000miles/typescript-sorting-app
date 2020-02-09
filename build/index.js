"use strict";
var Sorter = /** @class */ (function () {
    // Way 1:
    // collection: number[];
    // constructor(collection: number[]) {
    //   this.collection = collection;
    // }
    // Way 2:
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
    };
    return Sorter;
}());
;
var sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
