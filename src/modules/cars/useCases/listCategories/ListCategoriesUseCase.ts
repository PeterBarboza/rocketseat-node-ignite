import { Category } from "../../models/Category"

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"

export class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const repository = this.categoriesRepository

    const categories = repository.list()

    return categories
  }
}
