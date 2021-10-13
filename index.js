"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = __importDefault(require("fastify"));
var swagger_1 = require("./utils/swagger");
var item_routes_1 = require("./routes/item-routes");
var fastify_swagger_1 = __importDefault(require("fastify-swagger"));
var server = (0, fastify_1.default)({ logger: true });
var PORT = 8080;
server.register(fastify_swagger_1.default, swagger_1.swaggerOpts);
server.register(item_routes_1.itemRoutes);
server.listen(PORT, function (err, address) {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log("Server listening at " + address);
});
