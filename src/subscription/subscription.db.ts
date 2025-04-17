import { QueryResult } from "pg";

import fastify from "../main.js";

export async function subscriptionDb(email: string): Promise<QueryResult> {
  const query = await fastify.pg.query(
    `
        INSERT INTO readers (email, subscribed_at)
        VALUES ($1, NOW())
        ON CONFLICT (email) DO NOTHING
        RETURNING id
    `,
    [email]
  );

  return query;
}

export async function unsubscriptionDb(email: string): Promise<QueryResult> {
  const query = await fastify.pg.query(
    `
        UPDATE readers
        SET 
            subscribed_at = null,
            unsubscribed_at = NOW()
        WHERE
            email = $1
        RETURNING id
    `,
    [email]
  );

  return query;
}
