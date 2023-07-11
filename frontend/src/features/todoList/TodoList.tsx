import { Todo } from "../todo/Todo";
import { ITodoListProps } from "./ITodoListProps";

export const TodoList: React.FC<ITodoListProps> = (props) => {
  const items = props.todos.map((todo) => (
    <Todo key={todo.id} todo={todo} onDeleteTodo={props.onDeleteTodo} />
  ));
  return <>{items}</>;
};
