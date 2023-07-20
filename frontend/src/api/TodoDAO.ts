import { DataAccessObject } from "../services/DataAccessObject";
import { IDataAccessObject } from "../services/IDataAccessObject";
import { ITodo, TodoMeta } from "../shared/model/ITodo";

export const TodoDAO: IDataAccessObject<ITodo> = new DataAccessObject(TodoMeta);
