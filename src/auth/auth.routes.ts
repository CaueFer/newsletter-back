import { FastifyInstance } from "fastify";

import { login, signup } from "./auth.controller.js";

export default function authRoutes(fastify: FastifyInstance) {
  fastify.post("/login", login);
  fastify.post("/signup", signup);
}
