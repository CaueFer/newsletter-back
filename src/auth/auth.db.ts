import { QueryResult } from "pg";

import fastify from "../main.js";

export async function loginDb(
  email: string
): Promise<QueryResult<{ id: number; nome: string; password: string }>> {
  const query = fastify.pg.query(
    `
    select
      u.id,
      u.name,
      u.password
    from 
        "user" u
    where 
        u.email = $1
    `,
    [email]
  );

  return query;
}

export async function signupDb(
  name: string,
  email: string,
  password: string
): Promise<QueryResult<{ id: number }>> {
  const query = await fastify.pg.query(
    `
    INSERT INTO "user" (name, email, password)
    VALUES ($1, $2, $3)
    returning id
    `,
    [name, email, password]
  );

  return query;
}
