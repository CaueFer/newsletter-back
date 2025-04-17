import Fastify from "fastify";
import routes from "./routes";

const fastify = Fastify({
  logger: true,
});

fastify.register(routes);

const start = async () => {
  try {
    // CONECTAR NO REDIS

    await fastify.listen({ port: 5000 });
  } catch (e) {
    fastify.log.error(e);
    process.exit(1);
  }
};

start();
