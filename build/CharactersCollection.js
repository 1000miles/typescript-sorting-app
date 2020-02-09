"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersColllection = /** @class */ (function () {
    function CharactersColllection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersColllection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    CharactersColllection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    };
    CharactersColllection.prototype.swap = function (leftIndex, rightIndex) {
        // Split string into array of single chars
        var characters = this.data.split('');
        var leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        // Convert array of chars back to one string
        this.data = characters.join('');
    };
    return CharactersColllection;
}());
exports.CharactersColllection = CharactersColllection;
