import { DataSource } from "typeorm";

import { CONFIG } from "../configs";

export const AppDataSource = new DataSource(CONFIG.typeORM);

export async function initializeDatabase(): Promise<DataSource> {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }
    return AppDataSource;
  } catch (error) {
    console.error(error);
    return AppDataSource;
  }
}

initializeDatabase();
