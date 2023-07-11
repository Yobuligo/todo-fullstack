import { Model, ModelStatic } from "sequelize";
import { ITodo } from "../shared/model/ITodo";
import { IEntity } from "../shared/types/IEntity";
export declare const Todo: ModelStatic<Model<ITodo, IEntity>>;
