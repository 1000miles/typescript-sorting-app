"use strict";
var Sorter = /** @class */ (function () {
    // Way 1:
    // collection: number[];
    // constructor(collection: number[]) {
    //   this.collection = collection;
    // }
    // Way 2: Aquivalent to way 1
    function Sorter(collection) {
        this.collection = collection;
    }
    // We don't return anything here
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        /**
         * BUBBLE SORT: Compare a pair of elements (number) per each iteration
         * in ascending order (default)
         */
        // First loop
        for (var i = 0; i < length; i++) {
            // Second loop: right most element will be in the sorted position after first iteration is done which is why "i -1" is substracted here from length
            for (var j = 0; j < length - i - 1; j++) {
                /**
                 * TYPE GUARDS
                 * to check type or instance of collection
                 */
                // BAD SOLUTION with LinkedList example
                if (this.collection instanceof LinkedList) { }
                // All of this only works if collection is a number[]
                // If collection is an array of numbers
                // Reference to a constructor function, e.g. instanceof Array, Sorter, Date, etc.
                if (this.collection instanceof Array) {
                    // collection === number[]
                    // If left hand-side element (j) is greater than right-hand side element (j + 1)
                    if (this.collection[j] > this.collection[j + 1]) {
                        // Swap elements: Assign left-hand side element (j) to a new variable (leftHand)
                        var leftHand = this.collection[j];
                        // Switch right-hand side element to left-hand side: j = j + 1
                        this.collection[j] = this.collection[j + 1];
                        // Swap old left-hand side and move it to last right-hand side element
                        this.collection[j + 1] = leftHand;
                    }
                }
                // Only going to work if collection is a string
                // If collection is a string, do this logic instead:
                // ~~ logic to compare and swap characters in a string
                if (typeof this.collection === 'string') {
                }
            }
        }
    };
    return Sorter;
}());
;
var sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
