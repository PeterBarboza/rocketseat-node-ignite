import { Repository } from "typeorm";

import { AppDataSource } from "../../../../database/data-source";
import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

export class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = AppDataSource.getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      description,
    });

    await this.repository.save(category);
  }

  async findByName(name: string): Promise<Category> {
    return await this.repository.findOne({ where: { name } });
  }

  async list(): Promise<Category[]> {
    return await this.repository.find();
  }
}
