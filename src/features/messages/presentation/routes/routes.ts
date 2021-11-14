import { Router } from "express";
import { CacheRepository } from "../../../../core/infra/repositories/cache.repository";
import {
  EMvc,
  middlewareAdapter,
  MvcController,
  routerMvcAdapter,
} from "../../../../core/presentation";
import ProjectRepository from "../../infra/repositories/message.repository";
import { MessageController } from "../controllers";
import { MessageMiddleware } from "../middlewares";

const makeController = (): MvcController => {
  const repository = new ProjectRepository();
  const cache = new CacheRepository();
  return new MessageController(repository, cache);
};

export default class ProjectRoutes {
  public init(): Router {
    const routes = Router();

    routes.get("/messages", routerMvcAdapter(makeController(), EMvc.INDEX));
    routes.get("/messages/:uid", routerMvcAdapter(makeController(), EMvc.SHOW));

    routes.post(
      "/messages",
      middlewareAdapter(new MessageMiddleware()),
      routerMvcAdapter(makeController(), EMvc.STORE)
    );

    routes.put(
      "/messages/:uid",
      routerMvcAdapter(makeController(), EMvc.UPDATE)
    );

    routes.delete(
      "/messages/:uid",
      routerMvcAdapter(makeController(), EMvc.DELETE)
    );

    return routes;
  }
}
