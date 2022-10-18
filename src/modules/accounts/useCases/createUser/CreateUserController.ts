import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password, driver_license } = req.body;

    try {
      const createUserUseCase = container.resolve(CreateUserUseCase);

      await createUserUseCase.execute({
        name,
        email,
        password,
        driver_license,
      });

      return res.sendStatus(201);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }
}
