import { style } from "../../utils/style";
import styles from "./Card.module.css";
import { ICardProps } from "./ICardProps";

export const Card: React.FC<ICardProps> = (props) => {
  return (
    <div className={style(styles.card, props.className)}>{props.children}</div>
  );
};
