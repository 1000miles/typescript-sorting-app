"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var CharactersColllection = /** @class */ (function (_super) {
    __extends(CharactersColllection, _super);
    function CharactersColllection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
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
}(Sorter_1.Sorter));
exports.CharactersColllection = CharactersColllection;
