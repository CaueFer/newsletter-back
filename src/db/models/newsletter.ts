export interface INewsletter {
  id: number;
  writer_id: number;
  content: string;
  updated_at: Date | null;
  emailed_at: Date | null;
}
