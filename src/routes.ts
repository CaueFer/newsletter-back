import { FastifyInstance, FastifyPluginOptions } from "fastify";
import subscriptionRoutes from "./subscription/subscription.routes";
import contentRoutes from "./content/content.routes";
import mailerRoutes from "./mailer/mailer.routes

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.register(subscriptionRoutes);
  fastify.register(contentRoutes);
  fastify.register(mailerRoutes);
}
export default routes;
