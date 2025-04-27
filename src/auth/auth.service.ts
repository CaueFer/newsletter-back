import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { String } from "aws-sdk/clients/appstream.js";

import { loginDb, signupDb } from "./auth.db.js";
import { getJwtSecret } from "../lib/helpers.js";

async function tokenSign(payload: Record<string, unknown>): Promise<String> {
  const jwtSecret = getJwtSecret();
  if (jwtSecret == null) throw new Error("jwt secret undefined");

  return jwt.sign(payload, jwtSecret, {
    expiresIn: "24h",
  });
}

export async function loginService(
  email: string,
  password: string
): Promise<{
  status: number;
  response: { message: string; authToken?: string };
}> {
  if (!email || !password)
    return { status: 401, response: { message: "Email ou senha inválidos." } };

  const query = await loginDb(email);
  const user = query?.rows[0];

  if (user == null)
    return {
      status: 404,
      response: { message: "Email não associado a nenhuma conta." },
    };

  const { id, name, password: passwordDb, role } = user;

  // VERIFICA SENHA
  if (bcrypt.compareSync(password, passwordDb)) {
    const token = await tokenSign({ id, name, email, role });

    return {
      status: 202,
      response: { message: "Login efetuado com sucesso!", authToken: token },
    };
  }

  return {
    status: 401,
    response: { message: "Senha inválida!" },
  };
}

export async function signupService(
  name: string,
  email: string,
  password: string
): Promise<{
  status: number;
  response: { message: string; authToken?: string };
}> {
  if (!name || !email || !password)
    return {
      status: 401 ,
      response: { message: "Nome, email e senha inválidos!" },
    };

  const hashPassword = bcrypt.hashSync(password, 13);
  const newUser = await signupDb(name, email, hashPassword);

  if (!newUser)
    return {
      status: 500,
      response: {
        message: "Erro ao criar conta, tente novamente!",
      },
    };

  const { id, role } = newUser.rows[0];

  const token = await tokenSign({ id, name, email, role });

  return {
    status: 201,
    response: { message: "Conta criada com sucesso!", authToken: token },
  };
}
