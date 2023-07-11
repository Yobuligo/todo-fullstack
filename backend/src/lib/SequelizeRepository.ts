import { IRepository } from "../shared/api/IRepository";
import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";

export class SequelizeRepository<T extends IEntity> implements IRepository<T> {
  // constructor(private readonly model: )
  add(dataObject: IEntityDetails<T>): Promise<T> {
    throw new Error("Method not implemented.");
  }

  delete(dataObject: T): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  findAll(): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
}
