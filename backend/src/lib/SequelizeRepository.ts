import { Model, ModelStatic, WhereOptions } from "sequelize";
import { IRepository } from "../shared/api/IRepository";
import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";

export class SequelizeRepository<T extends IEntity> implements IRepository<T> {
  constructor(private readonly model: ModelStatic<Model<T, IEntity>>) {}

  add(dataObject: IEntityDetails<T>): Promise<T> {
    return this.createPromise(async (resolve) => {
      const data = await this.model.create(dataObject);
      resolve(data.dataValues);
    });
  }

  delete(dataObject: T): Promise<boolean> {
    return this.createPromise(async (resolve) => {
      const data = await this.model.destroy({
        where: { id: dataObject.id } as WhereOptions,
      });
      resolve(data === 1);
    });
  }

  findAll(): Promise<T[]> {
    return this.createPromise(async (resolve) => {
      const data = await this.model.findAll();
      const items = data.map((item) => item.dataValues);
      resolve(items);
    });
  }

  private createPromise<T>(
    block: (resolve: (value: T | PromiseLike<T>) => void) => void
  ): Promise<T> {
    return new Promise(async (resolve, reject) => {
      try {
        await block(resolve);
      } catch (error) {
        reject(error);
      }
    });
  }
}
