import { CategoriesRepository } from "../../repositories/CategoriesRepository"
import { ListCategoriesUseCase } from "./ListCategoriesUseCase"
import { ListCategoriesController } from "./ListCategoriesController"

const categoryRepository = new CategoriesRepository()

const listCategoryUseCase = new ListCategoriesUseCase(categoryRepository)

const listCategoriesController = new ListCategoriesController(
  listCategoryUseCase
)

export { listCategoriesController }
