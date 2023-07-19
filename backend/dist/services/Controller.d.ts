import { IRepository } from "../shared/api/IRepository";
import { IEntity } from "../shared/types/IEntity";
export declare class Controller<T extends IEntity> {
    private readonly path;
    private readonly repository;
    readonly router: import("express-serve-static-core").Router;
    constructor(path: string, repository: IRepository<T>);
    private delete;
    private get;
    private post;
    private version;
}
