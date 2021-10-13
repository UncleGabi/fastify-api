import fastify from "fastify";
import { swaggerOpts } from "./utils/swagger";
import { itemRoutes } from "./routes/item-routes";
import fastifySwagger from "fastify-swagger";

const server = fastify({ logger: true });
const PORT = 8080;

server.register(fastifySwagger, swaggerOpts);
server.register(itemRoutes);

server.listen(PORT, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
