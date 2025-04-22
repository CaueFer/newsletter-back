import { subscriptionDb, unsubscriptionDb } from "./subscription.db.js";

export async function subscriptionService(
  email: string
): Promise<{ status: number; response: { message: string } }> {
  const query = await subscriptionDb(email);
  const id = query.rows[0].id ?? null;

  if (id != null)
    return {
      status: 200,
      response: { message: "subscription added successfully!" },
    };

  return { status: 204, response: { message: "email already exists!" } };
}

export async function unsubscriptionService(
  email: string
): Promise<{ status: number; response: { message: string } }> {
  const query = await unsubscriptionDb(email);
  const id = query.rows[0].id ?? null;

  if (id != null)
    return {
      status: 200,
      response: { message: "subscription removed successfully!" },
    };

  return { status: 204, response: { message: "email not found!" } };
}
