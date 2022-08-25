import { Category } from "../models/Category";

interface ICreateCategoryDTO {
  name: string
  description: string
}

export class CategoriesRepository {
  private categories: Category[]

  constructor() {
    this.categories = []
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category()

    Object.assign(category, {
      name,
      description
    })

    this.categories.push(category)
  }

  list(): Category[] {
    return this.categories
  }

  findByName(name: string): Category {
    const category = this.categories.find(category => {
      return category.name.toLowerCase() === name.toLowerCase()
    })

    return category
  }

}