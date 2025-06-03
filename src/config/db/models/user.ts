export type UserRoleEnum = "admin" | "writer" | "reader";

export interface IUser {
  id: number;
  email: string;
  password: string;
  name: string;
  role: UserRoleEnum;
}
