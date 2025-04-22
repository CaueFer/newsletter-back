import { EventBridgeClient } from "@aws-sdk/client-eventbridge";
import { fromEnv } from "@aws-sdk/credential-provider-env";

const eventBridgeClient = new EventBridgeClient({
  region: process.env.AWS_REGION,
  credentials: fromEnv(),
});

export default eventBridgeClient;
