import { FastifyReply, FastifyRequest } from "fastify";
import { loginService, signupService } from "./auth.service.js";

export async function login(request: FastifyRequest, reply: FastifyReply) {
  try {
    const { email, password } = request.body as {
      email: string;
      password: string;
    };

    const { status, response } = await loginService(email, password);

    reply.status(status).send(response);
  } catch (e) {
    console.error(e);
    reply.status(500);
  }
}

export async function signup(request: FastifyRequest, reply: FastifyReply) {
  try {
    const { name, email, password } = request.body as {
      name: string;
      email: string;
      password: string;
    };

    const { status, response } = await signupService(name, email, password);

    reply.status(status).send(response);
  } catch (e) {
    console.error(e);
    reply.status(500);
  }
}
