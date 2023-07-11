import { TodoAdd } from "../todoAdd/TodoAdd";
import { ITodoFrameProps } from "./ITodoFrameProps";

export const TodoFrame: React.FC<ITodoFrameProps> = (props) => {
  return (
    <>
      <TodoAdd onAdd={() => {}} />
    </>
  );
};
