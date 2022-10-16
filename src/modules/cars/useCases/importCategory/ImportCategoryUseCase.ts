import { createReadStream } from "fs";
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
        .on("end", () => resolve(categories))
        .on("error", (error) => reject(error));
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    console.log(categories);
  }
}
