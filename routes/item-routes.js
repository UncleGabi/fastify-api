"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemRoutes = void 0;
var item_controllers_1 = require("../controllers/item-controllers");
var Item = {
    type: "object",
    properties: {
        id: { type: "string" },
        name: { type: "string" },
    },
};
var getItemsOpts = {
    schema: {
        tags: ["Get Items"],
        description: "Get all the items",
        response: {
            200: {
                type: "array",
                items: Item,
            },
        },
    },
    handler: item_controllers_1.getItems,
};
var getItemOpts = {
    schema: {
        tags: ["Get item"],
        description: "Get one particular item",
        params: {
            id: { type: "string" },
        },
        response: {
            200: Item,
        },
    },
    handler: item_controllers_1.getItem,
};
var postItemOpts = {
    schema: {
        tags: ["Add item"],
        description: "Add further items",
        body: {
            type: "object",
            required: ["name"],
            properties: {
                name: { type: "string" },
            },
        },
        response: {
            201: Item,
        },
    },
    handler: item_controllers_1.addItem,
};
var updateItemOpts = {
    schema: {
        tags: ["Update an item"],
        params: {
            id: { type: "string" },
        },
        body: {
            type: "object",
            required: ["name"],
            properties: {
                name: { type: "string", nullable: false },
            },
        },
        response: {
            200: Item,
        },
    },
    handler: item_controllers_1.updateItem,
};
var deleteItemOpts = {
    schema: {
        tags: ["Delete an item"],
        params: {
            id: { type: "string" },
        },
        response: {
            200: {
                type: "object",
                properties: {
                    message: { type: "string" },
                },
            },
        },
    },
    handler: item_controllers_1.deleteItem,
};
var itemRoutes = function (fastify, options, done) {
    fastify.get("/items", getItemsOpts);
    fastify.get("/items/:id", getItemOpts);
    fastify.post("/items", postItemOpts);
    fastify.put("/items/:id", updateItemOpts);
    fastify.delete("/items/:id", deleteItemOpts);
    done();
};
exports.itemRoutes = itemRoutes;
