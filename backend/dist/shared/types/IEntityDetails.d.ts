import { IEntity } from "./IEntity";
export declare type IEntityDetails<T extends IEntity> = Exclude<T, IEntity>;
