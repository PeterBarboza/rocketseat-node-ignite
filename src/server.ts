import express from "express";
import swaggerUI from "swagger-ui-express";
import "dotenv/config";
import "reflect-metadata";

import { router } from "./routes";
import { CONFIG } from "./configs";
import swaggerFile from "./swagger.json";

import "./database/data-source";
import "./shared/container";

const app = express();
const port = CONFIG.port;

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use(router);

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
