import { FastifyReply, FastifyRequest } from "fastify";
import {
  subscriptionService,
  unsubscriptionService,
} from "./subscription.service.js";

export async function subscription(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { email } = request.params as { email: string };

  const id = await subscriptionService(email);

  if (id != null) return reply.status(200);

  return reply.callNotFound();
}

export async function unsubscription(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { email } = request.params as { email: string };

  const id = await unsubscriptionService(email);

  if (id != null) return reply.status(200);

  return reply.callNotFound();
}
