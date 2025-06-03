import {
  DescribeRuleCommand,
  DisableRuleCommand,
  EnableRuleCommand,
} from "@aws-sdk/client-eventbridge";

import eventBridgeClient from "../config/aws/eventbridgeClient.js";

export async function mailerStartService(
  ruleName: string | undefined
): Promise<{ status: number; response: { message: string } }> {
  if (ruleName?.trim() != "" && ruleName != null) {
    const command = new EnableRuleCommand({ Name: ruleName });

    await eventBridgeClient.send(command);
    return {
      status: 200,
      response: { message: `Cron inicializado em: ${Date.now()}` },
    };
  }

  return {
    status: 204,
    response: { message: "Cron não encontrado" },
  };
}

export async function mailerPauseService(
  ruleName: string | undefined
): Promise<{
  status: number;
  response: { message: string };
}> {
  if (ruleName?.trim() != "" && ruleName != null) {
    const command = new DisableRuleCommand({ Name: ruleName });
    await eventBridgeClient.send(command);
    return {
      status: 200,
      response: { message: `Cron pausado em: ${Date.now()}` },
    };
  }

  return {
    status: 204,
    response: { message: "Cron não encontrado!" },
  };
}

export async function mailerStatusService(
  ruleName: string | undefined
): Promise<{
  status: number;
  response: { cronStatus?: string; message?: string };
}> {
  if (ruleName?.trim() != "" && ruleName != null) {
    const command = new DescribeRuleCommand({ Name: ruleName });

    const statusCron = await eventBridgeClient.send(command);

    return {
      status: 200,
      response: { cronStatus: statusCron.State },
    };
  }

  return { status: 204, response: { message: "Cron não encontrado" } };
}
