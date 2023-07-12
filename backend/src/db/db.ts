import { configDotenv } from "dotenv";
import { Dialect, Sequelize } from "sequelize";

configDotenv();

export const db = new Sequelize({
  dialect: process.env.DB_DIALECT as Dialect,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT!),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});
