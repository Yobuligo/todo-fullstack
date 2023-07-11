import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { ITodo } from "../../shared/model/ITodo";
import { TodoAdd } from "../todoAdd/TodoAdd";
import { TodoList } from "../todoList/TodoList";
import { ITodoFrameProps } from "./ITodoFrameProps";
import styles from "./TodoFrame.module.css";

export const TodoFrame: React.FC<ITodoFrameProps> = (props) => {
  const context = useContext(AppContext);

  const onAddTodo = (text: string) => {
    context.todos.onAdd({
      id: 123,
      text,
      createdAt: new Date(),
      changedAt: new Date(),
      completed: false,
    });
  };

  const onDeleteTodo = (todo: ITodo) => {
    context.todos.onDelete(todo);
  };

  return (
    <div className={styles.todoFrame}>
      <TodoAdd onAddTodo={onAddTodo} />
      <TodoList todos={context.todos.dataObjects} onDeleteTodo={onDeleteTodo} />
    </div>
  );
};
