import cors from "cors";
import express, { Request, Response, Router } from "express";
import MessageRoutes from "../../features/messages/presentation/routes/routes";

export default class App {
  readonly #express: express.Application;

  constructor() {
    this.#express = express();
  }

  public get server(): express.Application {
    return this.#express;
  }

  public init(): void {
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.#express.use(express.json());
    this.#express.use(express.urlencoded({ extended: false }));
    this.#express.use(cors());
  }

  private routes(): void {
    const router = Router();

    this.#express.get("/", (_: Request, res: Response) => res.redirect("/api"));
    this.#express.use("/api", router);

    router.get("/", (_: Request, res: Response) => res.send("API RUNNING..."));

    const messageRoutes = new MessageRoutes().init();
    this.#express.use(messageRoutes);
  }

  public start(port: number): void {
    this.#express.listen(port, () =>
      console.log(`Server is running on ${port} 🚀`)
    );
  }
}
