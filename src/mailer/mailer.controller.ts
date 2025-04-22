import { FastifyReply, FastifyRequest } from "fastify";

import {
  mailerPauseService,
  mailerStartService,
  mailerStatusService,
} from "./mailer.service.js";

const ruleName = process.env.RULE_NAME;
export async function mailerPause(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const success = await mailerPauseService(ruleName);

    if (success)
      reply.status(200).send({ message: `Cron pausado em: ${Date.now()}` });

    reply.status(204).send({ message: "Cron não encontrado" });
  } catch (e) {
    console.error(e);
    reply.status(500);
  }
}

export async function mailerStart(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const success = await mailerStartService(ruleName);

    if (success)
      reply
        .status(200)
        .send({ message: `Cron inicializado em: ${Date.now()}` });

    reply.status(204).send({ message: "Cron não encontrado" });
  } catch (e) {
    console.error(e);
    reply.status(500);
  }
}

export async function mailerStatus(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { success, status } = await mailerStatusService(ruleName);

    if (success && status)
      reply.status(200).send({ message: `Status do cron: ${status}`, status });

    reply.status(204).send({ message: "Cron não encontrado" });
  } catch (e) {
    console.error(e);
    reply.status(500);
  }
}
