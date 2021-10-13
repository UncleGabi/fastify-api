"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerOpts = void 0;
exports.swaggerOpts = {
    exposeRoute: true,
    routePrefix: "/docs",
    swagger: {
        schemes: ["http"],
        host: "localhost:8080",
        info: {
            title: "fastify-api",
            version: "1.0.1",
        },
        externalDocs: {
            url: "https://github.com/fastify/fastify-swagger",
            description: "Find more info here",
        },
        definitions: {
            Item: {
                $id: "Item",
                description: "Here you can find the properties of an item",
                type: "object",
                required: ["name"],
                properties: {
                    id: { type: "string" },
                    name: { type: "string", nullable: false },
                },
            },
        },
        produces: ["application/json"],
        consumes: ["application/json"],
    },
};
