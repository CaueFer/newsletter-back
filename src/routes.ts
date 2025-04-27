import { FastifyPluginOptions } from "fastify";

import subscriptionRoutes from "./subscription/subscription.routes.js";
import contentRoutes from "./content/content.routes.js";
import mailerRoutes from "./mailer/mailer.routes.js";
import authRoutes from "./auth/auth.routes.js";

import { FastifyInstanceTypeZod } from "./type.js";

async function routes(
  fastify: FastifyInstanceTypeZod,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _options: FastifyPluginOptions
) {
  fastify.get("/ping", async (_request, reply) => {
    reply.status(200).send({ message: "pong" });
  });

  await fastify.register(authRoutes, { prefix: "/auth" });
  await fastify.register(subscriptionRoutes, { prefix: "/subscription" });
  await fastify.register(contentRoutes, { prefix: "/content" });
  await fastify.register(mailerRoutes, { prefix: "/mailer" });
}
export default routes;
