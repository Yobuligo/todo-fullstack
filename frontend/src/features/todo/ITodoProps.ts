import { ITodo } from "../../shared/model/ITodo";

export interface ITodoProps {
  onDelete(todo: ITodo): void;
  todo: ITodo;
}
