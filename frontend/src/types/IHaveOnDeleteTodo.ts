import { ITodo } from "../shared/model/ITodo";

export interface IHaveOnDeleteTodo {
  onDeleteTodo(todo: ITodo): void;
}
