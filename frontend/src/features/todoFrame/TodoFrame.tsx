import { ITodo } from "../../shared/model/ITodo";
import { TodoAdd } from "../todoAdd/TodoAdd";
import { TodoList } from "../todoList/TodoList";
import { ITodoFrameProps } from "./ITodoFrameProps";

export const TodoFrame: React.FC<ITodoFrameProps> = (props) => {
  const todos: ITodo[] = [];
  return (
    <>
      <TodoAdd onAddNote={() => {}} />
      <TodoList todos={todos} onDeleteTodo={() => {}} />
    </>
  );
};
