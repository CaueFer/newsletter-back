import { subscriptionDb, unsubscriptionDb } from "./subscription.db.js";

export async function subscriptionService(email: string): Promise<number> {
  const query = await subscriptionDb(email);
  return query.rows[0].id;
}

export async function unsubscriptionService(email: string): Promise<number> {
  const query = await unsubscriptionDb(email);
  return query.rows[0].id;
}
