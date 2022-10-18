import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    try {
      const authenticateUserUseCase = container.resolve(
        AuthenticateUserUseCase
      );

      const authenticateInfo = await authenticateUserUseCase.execute({
        email,
        password,
      });

      return res.json(authenticateInfo);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }
}
