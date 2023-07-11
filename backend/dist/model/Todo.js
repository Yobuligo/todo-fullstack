"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db/db");
exports.Todo = db_1.db.define("todos", {
    text: sequelize_1.DataTypes.STRING,
    completed: sequelize_1.DataTypes.BOOLEAN,
});
//# sourceMappingURL=Todo.js.map