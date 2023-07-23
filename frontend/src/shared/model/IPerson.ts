import { IEntity } from "../types/IEntity";
import { IEntityMeta } from "../types/IEntityMeta";

export interface IPerson extends IEntity {
  firstname: string;
}

export const PersonMeta: IEntityMeta = { path: "/persons" };
