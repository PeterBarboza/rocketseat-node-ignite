import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

export class ImportCategoryController {
  async handle(req: Request, res: Response): Promise<any> {
    const { file } = req;

    try {
      const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

      await importCategoryUseCase.execute(file);

      return res.status(201).send();
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }
}
