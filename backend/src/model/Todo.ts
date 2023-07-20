import { DataTypes, Model, ModelStatic } from "sequelize";
import { db } from "../db/db";
import { ITodo, TodoMeta } from "../shared/model/ITodo";
import { IEntity } from "../shared/types/IEntity";
import { pathToTable } from "../utils/pathToTable";

export const Todo: ModelStatic<Model<ITodo, IEntity>> = db.define(
  pathToTable(TodoMeta.path),
  {
    text: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
  }
);
