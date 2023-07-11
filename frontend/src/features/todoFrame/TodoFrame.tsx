import { useContext, useState } from "react";
import { TodoDAO } from "../../api/TodoDAO";
import { LoadingSpinner } from "../../components/loadingSpinner/LoadingSpinner";
import { AppContext } from "../../context/AppContext";
import { useInitialize } from "../../hooks/useInitialize";
import { ITodo } from "../../shared/model/ITodo";
import { TodoAdd } from "../todoAdd/TodoAdd";
import { TodoList } from "../todoList/TodoList";
import { ITodoFrameProps } from "./ITodoFrameProps";
import styles from "./TodoFrame.module.css";

export const TodoFrame: React.FC<ITodoFrameProps> = (props) => {
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const context = useContext(AppContext);

  useInitialize(async () => {
    const todos = await TodoDAO.findAll();
    context.todos.setDataObjects(todos);
  });

  const onAddTodo = async (text: string) => {
    setShowLoadingSpinner(true);
    const todo = await TodoDAO.add({ text, completed: false });
    context.todos.onAdd(todo);
    setShowLoadingSpinner(false);
  };

  const onDeleteTodo = async (todo: ITodo) => {
    setShowLoadingSpinner(true);
    const success = await TodoDAO.delete(todo);
    if (success) {
      context.todos.onDelete(todo);
    }
    setShowLoadingSpinner(false);
  };

  return (
    <div className={styles.todoFrame}>
      <TodoAdd onAddTodo={onAddTodo} />
      {showLoadingSpinner ?? <LoadingSpinner />}
      <TodoList todos={context.todos.dataObjects} onDeleteTodo={onDeleteTodo} />
    </div>
  );
};
