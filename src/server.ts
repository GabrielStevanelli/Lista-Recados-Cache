import "reflect-metadata";
import Database from "./core/infra/data/connections/Database";
import { Redis } from "./core/infra/data/connections/redis";
import App from "./core/presentation/app";

Promise.all([new Database().openConnection(), new Redis().openConnection()])
  .then(() => {
    const app = new App();
    app.init();
    app.start(Number(process.env.PORT) || 8080);
  })
  .catch(console.error);
