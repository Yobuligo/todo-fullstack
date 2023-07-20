import { IRepository } from "../shared/api/IRepository";
import { IEntity } from "../shared/types/IEntity";
import { IEntityMeta } from "../shared/types/IEntityMeta";
export declare class Controller<T extends IEntity> {
    private readonly entityMeta;
    private readonly repository;
    readonly router: import("express-serve-static-core").Router;
    constructor(entityMeta: IEntityMeta, repository: IRepository<T>);
    private delete;
    private get;
    private post;
    private version;
}
