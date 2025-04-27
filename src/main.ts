import dotenv from "dotenv";
dotenv.config();

import { fastify } from "fastify";
import cors from "@fastify/cors";
import {
  validatorCompiler,
  serializerCompiler,
  ZodTypeProvider,
  jsonSchemaTransform,
} from "fastify-type-provider-zod";
import pg from "@fastify/postgres";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";

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

// ==== CONFIG SWAGGER
await app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "Newsletter API",
      version: "1.0.0",
    },
  },
  transform: jsonSchemaTransform,
});

await app.register(fastifySwaggerUi, {
  routePrefix: "/api/docs",
});

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
