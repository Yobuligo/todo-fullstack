import { Model, ModelStatic, WhereOptions } from "sequelize";
import { IEnvelope } from "../shared/api/IEnvelope";
import { IRepository } from "../shared/api/IRepository";
import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";

export class SequelizeRepository<T extends IEntity> implements IRepository<T> {
  private _version = new Date();
  private needsSynchronization = true;

  constructor(private readonly model: ModelStatic<Model<T, IEntity>>) {}

  get version(): Promise<Date> {
    return this.createPromise((resolve) => {
      resolve(this._version);
    });
  }

  add(dataObject: IEntityDetails<T>): Promise<T> {
    return this.createPromise(async (resolve) => {
      const data = await this.model.create(dataObject);
      resolve(data.dataValues);
    });
  }

  delete(dataObject: T): Promise<boolean> {
    return this.deleteById(dataObject.id);
  }

  deleteById(id: number): Promise<boolean> {
    return this.createPromise(async (resolve) => {
      const data = await this.model.destroy({
        where: { id: id } as WhereOptions,
      });
      resolve(data === 1);
    });
  }

  findAll(): Promise<IEnvelope<T[]>> {
    return this.createPromise(async (resolve) => {
      const data = await this.model.findAll();
      const items = data.map((item) => item.dataValues);
      resolve({ version: this._version, data: items });
    });
  }

  private createPromise<T>(
    block: (resolve: (value: T | PromiseLike<T>) => void) => void
  ): Promise<T> {
    return new Promise(async (resolve, reject) => {
      try {
        await this.synchronize();
        await block(resolve);
      } catch (error) {
        reject(error);
      }
    });
  }

  private async synchronize() {
    if (this.needsSynchronization) {
      await this.model.sync();
      this.needsSynchronization = false;
    }
  }
}
