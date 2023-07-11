import { useRef } from "react";
import { IInputProps } from "./IInputProps";

export const Input: React.FC<IInputProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <input
      {...props}
      ref={inputRef}
      onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
          props.onEnter?.(inputRef.current?.value ?? "");
        }
      }}
    />
  );
};
