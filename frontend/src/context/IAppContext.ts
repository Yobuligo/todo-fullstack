import { ITodo } from "../shared/model/ITodo";
import { IDataAccessObject } from "../types/IDataAccessObject";

export interface IAppContext {
  todos: IDataAccessObject<ITodo>;
}
