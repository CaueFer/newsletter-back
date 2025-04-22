import { FastifyInstance, FastifyPluginOptions } from "fastify";
import subscriptionRoutes from "./subscription/subscription.routes.js";
import contentRoutes from "./content/content.routes.js";
import mailerRoutes from "./mailer/mailer.routes.js";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get("/ping", async (request, reply) => {
    reply.status(200).send({ message: "pong" });
  });

  fastify.register(subscriptionRoutes, { prefix: "/subscription" });
  fastify.register(contentRoutes, { prefix: "/content" });
  fastify.register(mailerRoutes, { prefix: "/mailer" });
}
export default routes;
