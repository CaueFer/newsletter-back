import eventBridgeClient from "../aws/eventbridgeClient.js";

export async function mailerPauseService(
  ruleName: string | undefined
): Promise<boolean> {
  if (ruleName?.trim() != "" && ruleName != null) {
    await eventBridgeClient.disableRule({ Name: ruleName }).promise();

    return true;
  }

  return false;
}

export async function mailerStartService(
  ruleName: string | undefined
): Promise<boolean> {
  if (ruleName?.trim() != "" && ruleName != null) {
    await eventBridgeClient.enableRule({ Name: ruleName }).promise();

    return true;
  }

  return false;
}

export async function mailerStatusService(
  ruleName: string | undefined
): Promise<{ success: boolean; status?: string }> {
  if (ruleName?.trim() != "" && ruleName != null) {
    const statusCron = await eventBridgeClient
      .describeRule({ Name: ruleName })
      .promise();

    return { success: true, status: statusCron.State };
  }

  return { success: false };
}
