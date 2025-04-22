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

    const id = await subscriptionService(email);

    if (id != null) return reply.status(200);

    return reply.callNotFound();
  } catch (e) {
    console.error(e);
  }
}

export async function unsubscription(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { email } = request.params as { email: string };

    const id = await unsubscriptionService(email);

    if (id != null) return reply.status(200);

    return reply.callNotFound();
  } catch (e) {
    console.error(e);
    return reply.status(500);
  }
}
