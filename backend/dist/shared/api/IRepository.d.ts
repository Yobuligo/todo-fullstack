import { IEntity } from "../types/IEntity";
import { IEntityDetails } from "../types/IEntityDetails";
import { IEnvelope } from "./IEnvelope";
export interface IRepository<T extends IEntity> {
    version: Promise<Date>;
    add(dataObject: IEntityDetails<T>): Promise<T>;
    delete(dataObject: T): Promise<boolean>;
    deleteById(id: number): Promise<boolean>;
    findAll(): Promise<IEnvelope<T[]>>;
}
