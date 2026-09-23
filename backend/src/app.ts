import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import apiRouter from "./routes";
import { customResponseMidlleware } from "./middlewares";
import { configSession } from "./config";
import cors from "cors";

export const app = express();

app.use(bodyParser.json());

//middelewares
app.use(
  cors({
    origin: process.env.ALLOW_ORIGIN!,
    credentials: true,
  }),
);
app.use(customResponseMidlleware);
app.use(configSession);
app.use("/api/v1", apiRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.jsonResponse([], 500, err.message);
});
