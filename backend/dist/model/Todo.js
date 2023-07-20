"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db/db");
const ITodo_1 = require("../shared/model/ITodo");
const pathToTable_1 = require("../utils/pathToTable");
exports.Todo = db_1.db.define((0, pathToTable_1.pathToTable)(ITodo_1.TodoMeta.path), {
    text: sequelize_1.DataTypes.STRING,
    completed: sequelize_1.DataTypes.BOOLEAN,
});
//# sourceMappingURL=Todo.js.map