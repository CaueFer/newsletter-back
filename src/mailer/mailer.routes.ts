import { FastifyInstance, FastifyPluginOptions } from "fastify";

import { mailerPause, mailerStart, mailerStatus } from "./mailer.controller.js";

export default async function mailerRoutes(
  fastify: FastifyInstance,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _options: FastifyPluginOptions
) {
  fastify.post("/start", mailerStart);
  fastify.post("/pause", mailerPause);
  fastify.post("/status", mailerStatus);
}
