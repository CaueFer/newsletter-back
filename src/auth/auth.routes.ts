import z from "zod";

import { login, signup } from "./auth.controller.js";
import { FastifyInstanceTypeZod } from "../type.js";

export default async function authRoutes(fastify: FastifyInstanceTypeZod) {
  fastify.post(
    "/login",
    {
      schema: {
        tags: ["auth"],
        description: "Login existing user",
        body: z.object({
          email: z.string().email(),
          password: z.string().min(6),
        }),
        response: {
          202: z.object({
            message: z.string(),
            authToken: z.string().optional(),
          }),
        },
      },
    },
    login
  );

  fastify.post(
    "/signup",
    {
      schema: {
        tags: ["auth"],
        description: "Create new user account",
        body: z.object({
          name: z.string(),
          email: z.string().email(),
          password: z.string().min(6),
        }),
        response: {
          201: z.object({
            message: z.string(),
            authToken: z.string().optional(),
          }),
        },
      },
    },
    signup
  );
}
