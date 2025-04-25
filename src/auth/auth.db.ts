import { QueryResult } from "pg";

import fastify from "../main.js";

export async function loginDb(
  email: string
): Promise<
  QueryResult<{ id: number; name: string; password: string; role: string }>
> {
  const query = fastify.pg.query(
    `
    select
      u.id,
      u.name,
      u.password,
      u.role
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
): Promise<QueryResult<{ id: number; role: string }>> {
  const query = await fastify.pg.query(
    `
    INSERT INTO "user" (name, email, password)
    VALUES ($1, $2, $3)
    returning id, role
    `,
    [name, email, password]
  );

  return query;
}
