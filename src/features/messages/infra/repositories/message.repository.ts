import { MessageEntity } from "../../../../core/infra";
import { serverError } from "../../../../core/presentation";
import { Message } from "../../domain/models";

export default class MessageRepository {
  private readonly teste = "";

  async getMessages(): Promise<Message[]> {
    const messages = await MessageEntity.find();

    return messages.map((message) => {
      return {
        uid: message.uid,
        title: message.title,
        message: message.message,
        created_at: message.createdAt,
        updated_at: message.updatedAt,
      } as Message;
    });
  }

  async getMessage(uid: string): Promise<Message | undefined> {
    const message = await MessageEntity.findOne(uid);

    if (!message) return undefined;

    return {
      uid: message.uid!,
      title: message.title,
      message: message.message,
      created_at: message.createdAt!,
      updated_at: message.updatedAt!,
    };
  }

  async create(params: Message): Promise<Message> {
    const { title, message } = params;

    const createdMessage = await MessageEntity.create({
      title,
      message,
    }).save();

    return Object.assign({}, params, createdMessage);
  }

  async update(id: string, params: Message) {
    const { title, message } = params;

    const result = await MessageEntity.update(id, {
      title,
      message,
    });

    return Object.assign({}, params, result);
  }

  async delete(id: string) {
    return await MessageEntity.delete(id);
  }
}
