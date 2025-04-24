import dotenv from "dotenv";
dotenv.config();

import Fastify from "fastify";
import cors from "@fastify/cors";
import pg from "@fastify/postgres";

import routes from "./routes.js";

const fastify = Fastify({
  logger: true,
});

// CONFIGS DO FASTIFY
await fastify.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
});
await fastify.register(routes, { prefix: "/api/v1" });
await fastify.register(pg, {
  host: "localhost",
  port: 5432,
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
