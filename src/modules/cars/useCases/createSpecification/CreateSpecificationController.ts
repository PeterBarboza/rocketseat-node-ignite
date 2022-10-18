import { container } from "tsyringe";

import { Request, Response } from "express";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export class CreateSpecificationController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body;

    try {
      const createSpecificationUseCase = container.resolve(
        CreateSpecificationUseCase
      );

      await createSpecificationUseCase.execute({ name, description });

      return res.sendStatus(201);
    } catch (error) {
      console.error("*** ERROR ***", error);
      return res.status(500).json(error);
    }
  }
}
