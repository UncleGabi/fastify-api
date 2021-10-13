"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setItems = exports.items = void 0;
exports.items = [
    { id: "1", name: "Item One" },
    { id: "2", name: "Item Two" },
    { id: "3", name: "Item Three" },
];
var setItems = function (newItems) {
    exports.items = newItems;
};
exports.setItems = setItems;
