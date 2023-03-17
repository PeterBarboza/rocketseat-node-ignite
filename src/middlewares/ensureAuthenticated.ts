import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { CONFIG } from "../configs";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) throw new AppError("Token is missing", 401);

  const [, token] = authHeader.split(" ");

  let user_id: string;
  try {
    const { sub } = verify(token, CONFIG.jwtSecret) as IPayload;
    user_id = sub;
  } catch (error) {
    throw new AppError("Invalid token", 401);
  }

  const user = await new UsersRepository().findById(user_id);

  if (!user) throw new AppError("User does no exists!", 401);

  next();
}
