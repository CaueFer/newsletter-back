import { FastifyPluginOptions } from "fastify";

import { FastifyInstanceTypeZod } from "../type.js";

export default async function contentRoutes(
  fastify: FastifyInstanceTypeZod,
  options: FastifyPluginOptions
) {
  // LISTA AS NEWSLETTERS JA ENVIADAS - GET
  // LISTA UMA NEWSLETTER - GET
  // ESCRITOR ENVIA CONTEUDO NOVO - PROX NEWLETTERS - POST
  // EDITAR CONTEUDO JA ENVIADO - PUT
  // DELETE PROX NEWSLETTER ANTES DE SER ENVIADA
}
