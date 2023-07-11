import { configDotenv } from "dotenv";
import { Sequelize } from "sequelize";

configDotenv();

export const db = new Sequelize({
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT!),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});
