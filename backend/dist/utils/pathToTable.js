"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathToTable = void 0;
const pathToTable = (path) => {
    if (path.startsWith("/")) {
        return path.trimStart();
    }
    return path;
};
exports.pathToTable = pathToTable;
//# sourceMappingURL=pathToTable.js.map