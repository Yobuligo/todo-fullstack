import { DataAccessObject } from "../services/DataAccessObject";
import { IDataAccessObject } from "../services/IDataAccessObject";
import { IPerson, PersonMeta } from "../shared/model/IPerson";

export const PersonDAO: IDataAccessObject<IPerson> = new DataAccessObject(
  PersonMeta
);
