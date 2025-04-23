import { FastifyInstance, FastifyPluginOptions } from "fastify";

import subscriptionRoutes from "./subscription/subscription.routes.js";
import contentRoutes from "./content/content.routes.js";
import mailerRoutes from "./mailer/mailer.routes.js";
import authRoutes from "./auth/auth.routes.js";

async function routes(
  fastify: FastifyInstance,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _options: FastifyPluginOptions
) {
  fastify.get("/ping", async (_request, reply) => {
    reply.status(200).send({ message: "pong" });
  });

  fastify.register(authRoutes, { prefix: "/auth" });
  fastify.register(subscriptionRoutes, { prefix: "/subscription" });
  fastify.register(contentRoutes, { prefix: "/content" });
  fastify.register(mailerRoutes, { prefix: "/mailer" });
}
export default routes;
