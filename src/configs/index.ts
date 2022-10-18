import { DataSourceOptions } from "typeorm";
import "dotenv/config";

const entitiesPath = "src/modules/**/entities/*.ts";
const migrationsPath = "src/database/migrations/*.ts";

const typeORM: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [entitiesPath],
  migrations: [migrationsPath],
};

export const CONFIG = {
  port: process.env.APP_PORT || 3000,
  jwtSecret: process.env.JWT_SECRET,
  typeORM,
};
