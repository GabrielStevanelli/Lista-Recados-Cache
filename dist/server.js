"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const Database_1 = __importDefault(require("./core/infra/data/connections/Database"));
const redis_1 = require("./core/infra/data/connections/redis");
const app_1 = __importDefault(require("./core/presentation/app"));
Promise.all([new Database_1.default().openConnection(), new redis_1.Redis().openConnection()])
    .then(() => {
    const app = new app_1.default();
    app.init();
    app.start(8080);
})
    .catch(console.error);
