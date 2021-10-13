"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.addItem = exports.getItem = exports.getItems = void 0;
var item_data_1 = require("../utils/item-data");
var uuid_1 = require("uuid");
var getItems = function (req, reply) {
    reply.send(item_data_1.items);
};
exports.getItems = getItems;
var getItem = function (req, reply) {
    var id = req.params.id;
    var item = item_data_1.items.find(function (item) { return item.id === id; });
    reply.send(item);
};
exports.getItem = getItem;
var addItem = function (req, reply) {
    var name = req.body.name;
    var errorMsg = {
        statusCode: 400,
        error: "Bad Request",
        message: "the required property 'name' is blank",
    };
    var item = {
        id: (0, uuid_1.v4)(),
        name: name,
    };
    // only updates items if name is not blank
    name && (0, item_data_1.setItems)(__spreadArray(__spreadArray([], item_data_1.items, true), [item], false));
    // if name is left blank, throw an error message
    var CODE = name ? 201 : 200;
    var response = name ? item : errorMsg;
    reply.code(CODE).send(response);
};
exports.addItem = addItem;
var updateItem = function (req, reply) {
    var id = req.params.id;
    var name = req.body.name;
    var updatedItems = item_data_1.items.map(function (item) {
        return item.id === id ? { id: id, name: name } : item;
    });
    (0, item_data_1.setItems)(updatedItems);
    var item = item_data_1.items.find(function (item) { return item.id === id; });
    reply.code(200).send(item);
};
exports.updateItem = updateItem;
var deleteItem = function (req, reply) {
    var id = req.params.id;
    var updatedItems = item_data_1.items.filter(function (item) { return item.id !== id; });
    (0, item_data_1.setItems)(updatedItems);
    reply.code(200).send({ message: "Item " + id + " has been removed" });
};
exports.deleteItem = deleteItem;
