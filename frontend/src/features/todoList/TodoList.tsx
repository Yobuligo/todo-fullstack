import { Todo } from "../todo/Todo";
import { ITodoListProps } from "./ITodoListProps";
import styles from "./TodoList.module.css";

export const TodoList: React.FC<ITodoListProps> = (props) => {
  const items = props.todos.map((todo) => (
    <div key={todo.id} className={styles.todoListCard}>
      <Todo key={todo.id} todo={todo} onDeleteTodo={props.onDeleteTodo} />
    </div>
  ));
  return <>{items}</>;
};
