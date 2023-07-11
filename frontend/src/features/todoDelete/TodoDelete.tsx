import { ITodoDeleteProps } from "./ITodoDeleteProps";

export const TodoDelete: React.FC<ITodoDeleteProps> = (props) => {
  return <button onClick={props.onDelete} />;
};
