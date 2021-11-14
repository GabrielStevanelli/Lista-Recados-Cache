"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cache_repository_1 = require("../../../../core/infra/repositories/cache.repository");
const presentation_1 = require("../../../../core/presentation");
const message_repository_1 = __importDefault(require("../../infra/repositories/message.repository"));
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const makeController = () => {
    const repository = new message_repository_1.default();
    const cache = new cache_repository_1.CacheRepository();
    return new controllers_1.MessageController(repository, cache);
};
class ProjectRoutes {
    init() {
        const routes = (0, express_1.Router)();
        routes.get("/messages", (0, presentation_1.routerMvcAdapter)(makeController(), presentation_1.EMvc.INDEX));
        routes.get("/messages/:uid", (0, presentation_1.routerMvcAdapter)(makeController(), presentation_1.EMvc.SHOW));
        routes.post("/messages", (0, presentation_1.middlewareAdapter)(new middlewares_1.MessageMiddleware()), (0, presentation_1.routerMvcAdapter)(makeController(), presentation_1.EMvc.STORE));
        routes.put("/messages/:uid", (0, presentation_1.routerMvcAdapter)(makeController(), presentation_1.EMvc.UPDATE));
        routes.delete("/messages/:uid", (0, presentation_1.routerMvcAdapter)(makeController(), presentation_1.EMvc.DELETE));
        return routes;
    }
}
exports.default = ProjectRoutes;
