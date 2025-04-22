import { EventBridgeClient } from "@aws-sdk/client-eventbridge";
import { fromEnv } from "@aws-sdk/credential-provider-env";

const eventBridgeClient = new EventBridgeClient({
  region: process.env.AWS_REGION,
  credentials: fromEnv(),
});

// ADICIONE ESSAS CONFIGURACAO NO .ENV
// AWS_ACCESS_KEY_ID
// AWS_SECRET_ACCESS_KEY
// AWS_REGION
// RULE_NAME

export default eventBridgeClient;
