import express, { NextFunction, Request, Response } from "express";
import swaggerUI from "swagger-ui-express";
import "dotenv/config";
import "reflect-metadata";
import "express-async-errors";

import { router } from "./routes";
import { CONFIG } from "./configs";
import swaggerFile from "./swagger.json";
import { AppError } from "./errors/AppError";

import "./database/data-source";
import "./shared/container";

const app = express();
const port = CONFIG.port;

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message
    })
  }
  if(err instanceof Error) {
    return res.status(500).json({
      message: `Internal server error - ${err?.message}`
    })
  }

  return next()
})

app.use((req, res) => {
  res.end("Rocketseat API")
})

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
