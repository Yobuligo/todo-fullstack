import { ITodo } from "../../shared/model/ITodo";
import { IHaveOnDeleteTodo } from "../../types/IHaveOnDeleteTodo";

export interface ITodoProps extends IHaveOnDeleteTodo {
  todo: ITodo;
}
