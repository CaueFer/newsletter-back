import {
  DescribeRuleCommand,
  DisableRuleCommand,
  EnableRuleCommand,
} from "@aws-sdk/client-eventbridge";

import eventBridgeClient from "../aws/eventbridgeClient.js";

export async function mailerStartService(
  ruleName: string | undefined
): Promise<boolean> {
  if (ruleName?.trim() != "" && ruleName != null) {
    const command = new EnableRuleCommand({ Name: ruleName });

    await eventBridgeClient.send(command);
    return true;
  }

  return false;
}

export async function mailerPauseService(
  ruleName: string | undefined
): Promise<boolean> {
  if (ruleName?.trim() != "" && ruleName != null) {
    const command = new DisableRuleCommand({ Name: ruleName });
    await eventBridgeClient.send(command);
    return true;
  }

  return false;
}

export async function mailerStatusService(
  ruleName: string | undefined
): Promise<{ success: boolean; status?: string }> {
  if (ruleName?.trim() != "" && ruleName != null) {
    const command = new DescribeRuleCommand({ Name: ruleName });

    const statusCron = await eventBridgeClient.send(command);

    return { success: true, status: statusCron.State };
  }

  return { success: false };
}
