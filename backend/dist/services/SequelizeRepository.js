"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeRepository = void 0;
/**
 * This repository is responsible for providing access to the current configured database by using Sequelize as ORM
 */
class SequelizeRepository {
    constructor(model) {
        this.model = model;
        this._version = new Date();
        this.needsSynchronization = true;
    }
    get version() {
        return this.createPromise((resolve) => {
            resolve(this._version);
        });
    }
    add(dataObject) {
        return this.createPromise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.model.create(dataObject);
            resolve(data.dataValues);
        }));
    }
    delete(dataObject) {
        return this.deleteById(dataObject.id);
    }
    deleteById(id) {
        return this.createPromise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.model.destroy({
                where: { id: id },
            });
            resolve(data === 1);
        }));
    }
    findAll() {
        return this.createPromise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.model.findAll();
            const items = data.map((item) => item.dataValues);
            resolve({ version: this._version, data: items });
        }));
    }
    createPromise(block) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.synchronize();
                yield block(resolve);
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    synchronize() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.needsSynchronization) {
                yield this.model.sync();
                this.needsSynchronization = false;
            }
        });
    }
}
exports.SequelizeRepository = SequelizeRepository;
//# sourceMappingURL=SequelizeRepository.js.map