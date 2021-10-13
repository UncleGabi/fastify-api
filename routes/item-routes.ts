import { FastifyInstance, FastifySchema } from "fastify";
import {
  getItems,
  getItem,
  addItem,
  updateItem,
  deleteItem,
} from "../controllers/item-controllers";

const Item = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
  },
};

const getItemsOpts = {
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
  handler: getItems,
};

const getItemOpts = {
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
  handler: getItem,
};

const postItemOpts = {
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
  handler: addItem,
};

const updateItemOpts = {
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
  handler: updateItem,
};

const deleteItemOpts = {
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
  handler: deleteItem,
};

export const itemRoutes = (
  fastify: FastifyInstance,
  options: FastifySchema,
  done: any
) => {
  fastify.get("/items", getItemsOpts);

  fastify.get("/items/:id", getItemOpts);

  fastify.post("/items", postItemOpts);

  fastify.put("/items/:id", updateItemOpts);

  fastify.delete("/items/:id", deleteItemOpts);

  done();
};
