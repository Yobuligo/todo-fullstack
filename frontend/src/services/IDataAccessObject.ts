import { IRepository } from "../shared/api/IRepository";
import { IEntity } from "./../shared/types/IEntity";

export interface IDataAccessObject<T extends IEntity> extends IRepository<T> {
  isOutdated(): Promise<boolean>;
}
