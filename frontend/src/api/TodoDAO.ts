import { DataAccessObject } from "../services/DataAccessObject";
import { ITodo } from "../shared/model/ITodo";

class TodoDAODefault extends DataAccessObject<ITodo> {
  constructor() {
    super("/todo");
  }
}

export const TodoDAO = new TodoDAODefault();
