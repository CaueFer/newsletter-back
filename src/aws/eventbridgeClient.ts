import AWS from "aws-sdk";

AWS.config.update({ region: process.env.AWS_REGION });

const eventBridgeClient = new AWS.EventBridge();
export default eventBridgeClient;
