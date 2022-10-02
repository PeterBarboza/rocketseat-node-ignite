import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository"
import { ListCategoriesUseCase } from "./ListCategoriesUseCase"
import { ListCategoriesController } from "./ListCategoriesController"

const categoryRepository = CategoriesRepository.getInstance()

const listCategoryUseCase = new ListCategoriesUseCase(categoryRepository)

const listCategoriesController = new ListCategoriesController(
  listCategoryUseCase
)

export { listCategoriesController }
