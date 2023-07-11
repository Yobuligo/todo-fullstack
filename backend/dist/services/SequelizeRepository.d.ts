import { Model, ModelStatic } from "sequelize";
import { IRepository } from "../shared/api/IRepository";
import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";
export declare class SequelizeRepository<T extends IEntity> implements IRepository<T> {
    private readonly model;
    private needsSynchronization;
    constructor(model: ModelStatic<Model<T, IEntity>>);
    add(dataObject: IEntityDetails<T>): Promise<T>;
    delete(dataObject: T): Promise<boolean>;
    deleteById(id: number): Promise<boolean>;
    findAll(): Promise<T[]>;
    private createPromise;
    private synchronize;
}
