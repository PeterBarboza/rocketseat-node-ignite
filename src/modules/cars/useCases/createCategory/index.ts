import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository"
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"
import { CreateCategoryController } from "./CreateCategoryController"

const categoryRepository = CategoriesRepository.getInstance()

const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository)

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
)

export { createCategoryController }
