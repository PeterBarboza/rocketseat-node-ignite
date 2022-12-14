import { inject, injectable } from "tsyringe";

import { Category } from "../../entities/Category";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
export class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    const repository = this.categoriesRepository;

    const categories = await repository.list();

    return categories;
  }
}
