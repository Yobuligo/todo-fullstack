import { ITodo } from "../../shared/model/ITodo";
import { IHaveOnDeleteTodo } from "../../types/IHaveOnDeleteTodo";

export interface ITodoListProps extends IHaveOnDeleteTodo {
  todos: ITodo[];
}
