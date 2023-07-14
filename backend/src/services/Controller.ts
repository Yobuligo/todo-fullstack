import { Router } from "express";
import { IRepository } from "../shared/api/IRepository";
import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";

export class Controller<T extends IEntity> {
  readonly router = Router();

  constructor(
    private readonly path: string,
    private readonly repository: IRepository<T>
  ) {
    this.delete();
    this.get();
    this.post();
    this.lastVersion()
  }

  private delete() {
    this.router.delete(`${this.path}/:id`, async (req, res) => {
      const data = await this.repository.deleteById(parseInt(req.params.id));
      if (data) {
        res.status(200).send(true);
      } else {
        res.status(404).send(false);
      }
    });
  }

  private get() {
    this.router.get(this.path, async (req, res) => {
      const data = await this.repository.findAll();
      res.status(200).send(data);
    });
  }

  private post() {
    this.router.post(this.path, async (req, res) => {
      const body: IEntityDetails<T> = { ...req.body };
      const data = await this.repository.add(body);
      res.status(201).send(data);
    });
  }

  private lastVersion(){
    this.router.get(`${this.path}/lastVersion`, (req, res)=>{
      // changed
      res.status(200).send(this.repository.lastVersion)
    })
  }
}
