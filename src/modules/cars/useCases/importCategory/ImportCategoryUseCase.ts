import { createReadStream, promises } from "fs";
import { Parser } from "csv-parse";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategory {
  name: string;
  description: string;
}

type CategoryCSVLineType = [name: string, description: string];

export class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const parseFile = new Parser({});
      const categories: IImportCategory[] = [];

      createReadStream(file.path).pipe(parseFile);

      parseFile
        .on("data", async (line: CategoryCSVLineType) => {
          const [name, description] = line;

          categories.push({
            name,
            description,
          });
        })
        .on("end", async () => {
          try {
            await promises.unlink(file.path);
          } catch (error) {
            console.error(error);
          }
          resolve(categories);
        })
        .on("error", (error) => reject(error));
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map((category) => {
      const existCategory = this.categoriesRepository.findByName(category.name);

      if (!existCategory) {
        this.categoriesRepository.create({
          name: category.name,
          description: category.description,
        });
      }
    });
  }
}
