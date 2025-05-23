import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { subscription, unsubscription } from "./subscription.controller.js";

export default async function subscriptionRoutes(
  fastify: FastifyInstance,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _options: FastifyPluginOptions
) {
  fastify.post("/sub/:email", subscription);
  fastify.post("/unsub/:email", unsubscription);
}
