import { FastifyInstance, FastifyPluginOptions } from "fastify";

export default async function subscriptionRoutes(
  fastify: FastifyInstance,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options: FastifyPluginOptions
) {
  fastify.post("/sub/:email", subscription);
  fastify.post("/unsub/:email", unsubscription);
}
