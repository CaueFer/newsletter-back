import { FastifyPluginOptions } from "fastify";
import { z } from "zod";

import { mailerPause, mailerStart, mailerStatus } from "./mailer.controller.js";
import { FastifyInstanceTypeZod } from "../type.js";

export default async function mailerRoutes(
  fastify: FastifyInstanceTypeZod,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _options: FastifyPluginOptions
) {
  fastify.post(
    "/start",
    {
      schema: {
        tags: ["mailer"],
        description: "Re-start eventBridge schedule",
        response: {
          200: z.object({
            message: z.string(),
          }),
          204: z.object({
            message: z.string(),
          }),
        },
      },
    },
    mailerStart
  );

  fastify.post(
    "/pause",
    {
      schema: {
        tags: ["mailer"],
        description: "Pause eventBridge schedule",
        response: {
          200: z.object({
            message: z.string(),
          }),
          204: z.object({
            message: z.string(),
          }),
        },
      },
    },
    mailerPause
  );

  fastify.post(
    "/status",
    {
      schema: {
        tags: ["mailer"],
        description: "Return actual status of an eventBridge schedule",
        response: {
          200: z.object({
            message: z.string(),
          }),
          204: z.object({
            message: z.string(),
          }),
        },
      },
    },
    mailerStatus
  );
}
