import { Input } from "../../components/Input";
import { ITodoAddProps } from "./ITodoAddProps";

export const TodoAdd: React.FC<ITodoAddProps> = (props) => {
  return (
    <>
      <Input placeholder="Enter todo" /> <button>+</button>
    </>
  );
};
