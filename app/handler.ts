import { APIGatewayEvent, Context, Handler } from "aws-lambda";
import dotenv from "dotenv";
import path from "path";

const dotenvPath = path.join(
  __dirname,
  "../",
  `config/.env.${process.env.NODE_ENV}`
);

dotenv.config({
  path: dotenvPath,
});

export const hello: Handler = async (
  event: APIGatewayEvent,
  context: Context
) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
