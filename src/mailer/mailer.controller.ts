import { FastifyReply, FastifyRequest } from "fastify";

import {
  mailerPauseService,
  mailerStartService,
  mailerStatusService,
} from "./mailer.service.js";

const ruleName = process.env.RULE_NAME;
export async function mailerPause(
  _request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { status, response } = await mailerPauseService(ruleName);

    reply.status(status).send(response);
  } catch (e) {
    console.error(e);
    reply.status(500);
  }
}

export async function mailerStart(
  _request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { status, response } = await mailerStartService(ruleName);

    reply.status(status).send(response);
  } catch (e) {
    console.error(e);
    reply.status(500);
  }
}

export async function mailerStatus(
  _request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { status, response } = await mailerStatusService(ruleName);

    reply.status(status).send(response);
  } catch (e) {
    console.error(e);
    reply.status(500);
  }
}
