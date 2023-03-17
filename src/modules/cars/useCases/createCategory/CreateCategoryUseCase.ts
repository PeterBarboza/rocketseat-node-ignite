import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const repository = this.categoriesRepository;

    const categoryAlreadyExists = await repository.findByName(name);

    console.log(categoryAlreadyExists);

    if (categoryAlreadyExists)
      throw new AppError("Category already exists", 400);

    await repository.create({ name, description });
  }
}
