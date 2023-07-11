import bodyParser from "body-parser";
import express from "express";
import { Todo } from "./model/Todo";
import { Controller } from "./services/Controller";
import { SequelizeRepository } from "./services/SequelizeRepository";

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use(new Controller("/todos", new SequelizeRepository(Todo)).router);
app.use((req, res) => {
  res.status(404).send("<h1>Unknown Request</h1>");
});
app.listen(5000);
