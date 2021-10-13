import { FastifyReply, FastifyRequest } from "fastify";
import { items, setItems } from "../utils/item-data";

import { v4 as uuidv4 } from "uuid";

export const getItems = (req: FastifyRequest, reply: FastifyReply) => {
  reply.send(items);
};

export const getItem = (req: FastifyRequest, reply: FastifyReply) => {
  const { id } = <{ id: string }>req.params;
  const item = items.find((item) => item.id === id);

  reply.send(item);
};

export const addItem = (req: FastifyRequest, reply: FastifyReply) => {
  const { name } = <{ name: string }>req.body;

  const errorMsg = {
    statusCode: 400,
    error: "Bad Request",
    message: "the required property 'name' is blank",
  };

  const item = {
    id: uuidv4(),
    name,
  };

  // only updates items if name is not blank
  name && setItems([...items, item]);

  // if name is left blank, throw an error message
  const CODE = name ? 201 : 200;
  const response = name ? item : errorMsg;

  reply.code(CODE).send(response);
};

export const updateItem = (req: FastifyRequest, reply: FastifyReply) => {
  const { id } = <{ id: string }>req.params;
  const { name } = <{ name: string }>req.body;

  const updatedItems = items.map((item) => {
    return item.id === id ? { id, name } : item;
  });

  setItems(updatedItems);

  const item = items.find((item) => item.id === id);

  reply.code(200).send(item);
};

export const deleteItem = (req: FastifyRequest, reply: FastifyReply) => {
  const { id } = <{ id: string }>req.params;
  const updatedItems = items.filter((item) => item.id !== id);

  setItems(updatedItems);

  reply.code(200).send({ message: `Item ${id} has been removed` });
};
