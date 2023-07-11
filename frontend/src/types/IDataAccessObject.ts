export interface IDataAccessObject<T> {
  readonly dataObjects: T[];
  onAdd(dataObject: T): void;
  onDelete(dataObject: T): void;
  setDataObjects(dataObjects: T[]): void;
}
