import { Model, ModelStatic } from "sequelize";
import { IEnvelope } from "../shared/api/IEnvelope";
import { IRepository } from "../shared/api/IRepository";
import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";
/**
 * This repository is responsible for providing access to the current configured database by using Sequelize as ORM
 */
export declare class SequelizeRepository<T extends IEntity> implements IRepository<T> {
    private readonly model;
    private _version;
    private needsSynchronization;
    constructor(model: ModelStatic<Model<T, IEntity>>);
    get version(): Promise<Date>;
    add(dataObject: IEntityDetails<T>): Promise<T>;
    delete(dataObject: T): Promise<boolean>;
    deleteById(id: number): Promise<boolean>;
    findAll(): Promise<IEnvelope<T[]>>;
    private createPromise;
    private synchronize;
}
