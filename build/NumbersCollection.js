"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection = /** @class */ (function () {
    // Way 1:
    // data: number[];
    // constructor(data: number[]) {
    //   this.data = data;
    // }
    // Way 2: Shorthand with modifier
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        // Way 1
        // length1(): number {
        //   return this.data.length;
        // }
        // Way 2: getter
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    // Return a boolean after each index element comparison
    NumbersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    NumbersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
var collection = new NumbersCollection([1, 2, 3]);
//collection.length1(); // Functionn call to length();
collection.length; // With getter method no function call here
