import { DataTypes, Model, ModelStatic } from "sequelize";
import { db } from "../db/db";
import { ITodo } from "../shared/model/ITodo";
import { IEntity } from "../shared/types/IEntity";

export const Todo: ModelStatic<Model<ITodo, IEntity>> = db.define("todos", {
  text: DataTypes.STRING,
  completed: DataTypes.BOOLEAN,
});
