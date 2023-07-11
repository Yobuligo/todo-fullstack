import { Input } from "../../components/Input";
import { useTranslation } from "../../hooks/useTranslation";
import { ITodoAddProps } from "./ITodoAddProps";

export const TodoAdd: React.FC<ITodoAddProps> = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <Input placeholder={t.placeholderEnterTodo} /> <button>+</button>
    </>
  );
};
