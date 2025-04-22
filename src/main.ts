import Fastify from "fastify";
import pg from "@fastify/postgres";

import routes from "./routes.js";

const fastify = Fastify({
  logger: true,
});

fastify.register(routes, { prefix: "/api/v1" });
fastify.register(pg, {
  host: "localhost",
  user: "postgres",
  password: "123456",
  database: "newsletter",
});

export default fastify;

const start = async () => {
  try {
    // CONECTAR NO REDIS

    fastify.listen({ port: 5000 }, () => {
      console.log(`Server running on port 5000`);
    });
  } catch (e) {
    fastify.log.error(e);
    process.exit(1);
  }
};

start();
