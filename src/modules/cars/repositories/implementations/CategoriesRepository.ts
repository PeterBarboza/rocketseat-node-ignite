import { Category } from "../../models/Category"
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository"

export class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[]

  private static INSTANCE: CategoriesRepository

  private constructor() {
    this.categories = []
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository()
    }
    return CategoriesRepository.INSTANCE
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => {
      return category.name.toLowerCase() === name.toLowerCase()
    })

    return category
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category()

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    })

    this.categories.push(category)
  }

  list(): Category[] {
    return this.categories
  }
}
