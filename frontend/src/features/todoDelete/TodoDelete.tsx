import { useTranslation } from "../../hooks/useTranslation";
import { ITodoDeleteProps } from "./ITodoDeleteProps";

export const TodoDelete: React.FC<ITodoDeleteProps> = (props) => {
  const { t } = useTranslation();
  return <button onClick={props.onDelete}>{t.deleteTodo}</button>;
};
