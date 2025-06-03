export interface IReader {
  id: number;
  email: string;
  subscribed_at: Date | null;
  unsubscribed_at: Date | null;
  last_received_at: Date | null;
}
