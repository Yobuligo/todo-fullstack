import { useState } from "react";
import { Input } from "../../components/Input";
import { useTranslation } from "../../hooks/useTranslation";
import { ITodoAddProps } from "./ITodoAddProps";

export const TodoAdd: React.FC<ITodoAddProps> = (props) => {
  const [text, setText] = useState("");
  const { t } = useTranslation();

  const onSubmit = () => {
    if (!text.length) {
      return;
    }

    props.onAddNote(text);
    setText("");
  };

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    setText(event.currentTarget.value);

  return (
    <>
      <Input
        placeholder={t.placeholderEnterTodo}
        value={text}
        onChange={onChangeValue}
        onEnter={onSubmit}
      />
      <button onClick={onSubmit}>+</button>
    </>
  );
};
