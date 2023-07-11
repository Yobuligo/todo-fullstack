import { useCallback, useState } from "react";
import { IEntity } from "../shared/types/IEntity";
import { IDataAccessObject } from "../types/IDataAccessObject";

export const useDataAccessObject = <T extends IEntity>(
  initialDataObject?: T[]
): IDataAccessObject<T> => {
  const [dataObjects, setDataObjects] = useState(initialDataObject ?? []);

  const onAdd = useCallback((dataObject: T) => {
    setDataObjects((previous) => [...previous, dataObject]);
  }, []);

  const onDelete = useCallback((dataObject: T) => {
    setDataObjects((previous) => {
      const index = previous.findIndex((item) => item.id === dataObject.id);
      previous.splice(index, 1);
      return [...previous];
    });
  }, []);

  return { dataObjects, onAdd, onDelete, setDataObjects };
};
