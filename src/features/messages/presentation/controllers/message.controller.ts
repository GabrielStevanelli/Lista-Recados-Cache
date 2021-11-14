import { CacheRepository } from "../../../../core/infra/repositories/cache.repository";
import {
  DataNotFoundError,
  HttpRequest,
  HttpResponse,
  MvcController,
  notFound,
  ok,
  serverError,
} from "../../../../core/presentation";
import MessageRepository from "../../infra/repositories/message.repository";

export class MessageController implements MvcController {
  readonly #repository: MessageRepository;
  readonly #cache: CacheRepository;

  constructor(repository: MessageRepository, cache: CacheRepository) {
    this.#repository = repository;
    this.#cache = cache;
  }

  public async index() {
    try {
      const cache = await this.#cache.get("message:all");

      if (cache) {
        return ok(
          cache.map((message: any) =>
            Object.assign({}, message, {
              cache: true,
            })
          )
        );
      }

      const messages = await this.#repository.getMessages();

      await this.#cache.set("message:all", messages);

      return ok(messages);
    } catch (error) {
      return ok(error);
    }
  }

  async delete(request: HttpRequest): Promise<HttpResponse> {
    const { uid } = request.params;

    try {
      const result = await this.#repository.delete(uid);
      return ok(result);
    } catch (error) {
      return serverError();
    }
  }

  async store(request: HttpRequest): Promise<HttpResponse> {
    try {
      const result = await this.#repository.create(request.body);

      this.#cache.del("message:all");

      return ok(result);
    } catch (error) {
      return serverError();
    }
  }

  public async show(request: HttpRequest): Promise<HttpResponse> {
    const { uid } = request.params;

    try {
      // consulto o cache
      const cache = await this.#cache.get(`message:${uid}`);
      if (cache) {
        return ok(Object.assign({}, cache, { cache: true }));
      }

      const message = await this.#repository.getMessage(uid);
      if (!message) {
        return notFound(new DataNotFoundError());
      }

      await this.#cache.setex(`message:${uid}`, message, 20);

      return ok(message);
    } catch (error) {
      return serverError();
    }
  }

  async update(request: HttpRequest): Promise<HttpResponse> {
    const { uid } = request.params;

    try {
      const result = await this.#repository.update(uid, request.body);

      return ok(result);
    } catch (error) {
      console.log(error);
      return serverError();
    }
  }
}
