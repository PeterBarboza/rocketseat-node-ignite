import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"

interface IRequest {
  name: string
  description: string
}

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const repository = this.categoriesRepository

    const categoryAlreadyExists = repository.findByName(name)

    if (categoryAlreadyExists) throw new Error("Category already exists")

    repository.create({ name, description })
  }
}
