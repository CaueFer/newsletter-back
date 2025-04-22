import { FastifyReply, FastifyRequest } from "fastify";

import {
  subscriptionService,
  unsubscriptionService,
} from "./subscription.service.js";

export async function subscription(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { email } = request.params as { email: string };

    const { status, response } = await subscriptionService(email);

    return reply.status(status).send(response);
  } catch (e) {
    console.error(e);
    return reply.status(500);
  }
}

export async function unsubscription(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { email } = request.params as { email: string };

    const { status, response } = await unsubscriptionService(email);

    return reply.status(status).send(response);
  } catch (e) {
    console.error(e);
    return reply.status(500);
  }
}
