import { Router } from "express"
import { CategoriesRepository } from "../repositories/CategoriesRepository"

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body



  return res.sendStatus(201)
})

categoriesRoutes.get("/", (req, res) => {
  const all = categoriesRepository.list()

  return res.json(all)
})

export { categoriesRoutes }