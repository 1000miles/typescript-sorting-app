"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Abstract class => Eventually will exist in the future
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        /**
         * BUBBLE SORT: Compare a pair of elements (number) per each iteration
         * in ascending order (default)
         */
        // First loop
        for (var i = 0; i < length; i++) {
            // Second loop: right most element will be in the sorted position after first iteration is done which is why "i -1" is substracted here from length
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
;
