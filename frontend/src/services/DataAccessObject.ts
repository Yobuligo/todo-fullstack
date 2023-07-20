import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";
import { IEntityMeta } from "../shared/types/IEntityMeta";
import { IEnvelope } from "./../../../backend/src/shared/api/IEnvelope";
import { IDataAccessObject } from "./IDataAccessObject";

export class DataAccessObject<T extends IEntity>
  implements IDataAccessObject<T>
{
  private _version = new Date();

  constructor(private readonly entityMeta: IEntityMeta) {}

  get version(): Promise<Date> {
    return this.createPromise(async (resolve) => {
      const response = await fetch(`${this.url}/version`);
      const data = await response.json();
      resolve(data);
    });
  }

  add(dataObject: IEntityDetails<T>): Promise<T> {
    return this.createPromise(async (resolve) => {
      const response = await fetch(this.url, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataObject),
      });
      resolve(await response.json());
    });
  }

  delete(dataObject: T): Promise<boolean> {
    return this.deleteById(dataObject.id);
  }

  deleteById(id: number): Promise<boolean> {
    return this.createPromise(async (resolve) => {
      const response = await fetch(`${this.url}/${id}`, {
        method: "DELETE",
        mode: "cors",
      });
      resolve(await response.json());
    });
  }

  findAll(): Promise<IEnvelope<T[]>> {
    return this.createPromise(async (resolve) => {
      const response = await fetch(this.url, { mode: "cors" });
      if (!response.ok) {
        console.log(`Error when sending request to '${response.url}'`);
      }
      const envelope: IEnvelope<T[]> = await response.json();
      this._version = envelope.version;
      resolve(envelope);
    });
  }

  isOutdated(): Promise<boolean> {
    return this.createPromise(async (resolve) => {
      const lastVersion = await this.version;
      resolve(this._version < lastVersion);
    });
  }

  private get url(): string {
    return `http://localhost:5000${this.entityMeta.path}`;
  }

  private createPromise<T>(
    block: (
      resolve: (value: T | PromiseLike<T>) => void,
      reject: (reason?: any) => void
    ) => void
  ): Promise<T> {
    return new Promise(async (resolve, reject) => {
      try {
        await block(resolve, reject);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
}
