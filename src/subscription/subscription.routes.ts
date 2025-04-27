import { FastifyPluginOptions } from "fastify";
import { z } from "zod";

import { subscription, unsubscription } from "./subscription.controller.js";

import { FastifyInstanceTypeZod } from "../type.js";

export default async function subscriptionRoutes(
  fastify: FastifyInstanceTypeZod,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _options: FastifyPluginOptions
) {
  fastify.post(
    "/sub/:email",
    {
      schema: {
        tags: ["subscription"],
        describe: "Add email as subscriber",
        params: z.object({
          email: z.string().email(),
        }),
        response: {
          200: z.object({
            message: z.string(),
          }),
        },
      },
    },
    subscription
  );
  fastify.post(
    "/unsub/:email",
    {
      schema: {
        tags: ["subscription"],
        describe: "Remove email as subscriber",
        params: z.object({
          email: z.string().email(),
        }),
        response: {
          200: z.object({
            message: z.string(),
          }),
        },
      },
    },
    unsubscription
  );
}
