import { CategoriesRepository } from "../../repositories/CategoriesRepository"
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"
import { CreateCategoryController } from "./CreateCategoryController"

const categoryRepository = new CategoriesRepository()

const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository)

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
)

export { createCategoryController }
