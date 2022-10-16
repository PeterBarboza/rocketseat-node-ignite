import { DataSource } from "typeorm";

import { CONFIG } from "../configs";

export const AppDataSource = new DataSource(CONFIG.typeORM);

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
