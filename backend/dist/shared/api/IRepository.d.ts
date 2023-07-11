import { IEntity } from "../types/IEntity";
import { IEntityDetails } from "../types/IEntityDetails";
export interface IRepository<T extends IEntity> {
    add(dataObject: IEntityDetails<T>): Promise<T>;
    delete(dataObject: T): Promise<boolean>;
    deleteById(id: number): Promise<boolean>;
    findAll(): Promise<T[]>;
}
