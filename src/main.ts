import dotenv from "dotenv";
dotenv.config();

import { fastify } from "fastify";
import cors from "@fastify/cors";
import pg from "@fastify/postgres";
import {
  validatorCompiler,
  serializerCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod";

import routes from "./routes.js";
import { dbConnection } from "./db/db.config.js";

const app = fastify({
  logger: true,
}).withTypeProvider<ZodTypeProvider>();

// ===== VALIDACAO DE DADOS
// INPUT
app.setValidatorCompiler(validatorCompiler);
// OUTPUT
app.setSerializerCompiler(serializerCompiler);

// ===== CONFIGS DO FASTIFY
await app.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
});
await app.register(pg, dbConnection);
await app.register(routes, { prefix: "/api/v1" });

const start = async () => {
  try {
    // CONECTAR NO REDIS

    app.listen({ port: 5000 }, () => {
      console.log(`Server running on port 5000`);
    });
  } catch (e) {
    app.log.error(e);
    process.exit(1);
  }
};

start();

export default app;
