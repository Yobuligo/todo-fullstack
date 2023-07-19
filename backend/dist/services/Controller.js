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
exports.Controller = void 0;
const express_1 = require("express");
class Controller {
    constructor(path, repository) {
        this.path = path;
        this.repository = repository;
        this.router = (0, express_1.Router)();
        this.version();
        this.delete();
        this.get();
        this.post();
    }
    delete() {
        this.router.delete(`${this.path}/:id`, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.repository.deleteById(parseInt(req.params.id));
            if (data) {
                res.status(200).send(true);
            }
            else {
                res.status(404).send(false);
            }
        }));
    }
    get() {
        this.router.get(this.path, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.repository.findAll();
            res.status(200).send(data);
        }));
    }
    post() {
        this.router.post(this.path, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const body = Object.assign({}, req.body);
            const data = yield this.repository.add(body);
            res.status(201).send(data);
        }));
    }
    version() {
        this.router.get(`${this.path}/version`, (req, res) => {
            res.status(200).send(this.repository.version);
        });
    }
}
exports.Controller = Controller;
//# sourceMappingURL=Controller.js.map