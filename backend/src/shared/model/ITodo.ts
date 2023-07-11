import { IEntity } from "../types/IEntity";

export interface ITodo extends IEntity {
  text: string;
  completed: boolean;
}
