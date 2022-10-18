import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);

      const categories = await listCategoriesUseCase.execute();

      return res.json(categories);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }
}
