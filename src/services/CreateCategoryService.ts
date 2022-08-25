import { CategoriesRepository } from "../repositories/CategoriesRepository"

interface IRequest {
  name: string
  description: string
}

export class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) { }

  execute({ name, description }: IRequest) {
    const repository = this.categoriesRepository

    const categoryAlreadyExists = repository.findByName(name)

    if (categoryAlreadyExists) throw new Error("Category already exists")

    repository.create({ name, description })
  }
}