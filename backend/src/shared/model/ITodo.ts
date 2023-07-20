import { IEntity } from "../types/IEntity";
import { IEntityMeta } from "../types/IEntityMeta";

export interface ITodo extends IEntity {
  text: string;
  completed: boolean;
}

export const TodoMeta: IEntityMeta = { path: "/todos" };
