"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infra_1 = require("../../../../core/infra");
class MessageRepository {
    constructor() {
        this.teste = "";
    }
    async getMessages() {
        const messages = await infra_1.MessageEntity.find();
        return messages.map((message) => {
            return {
                uid: message.uid,
                title: message.title,
                message: message.message,
                created_at: message.createdAt,
                updated_at: message.updatedAt,
            };
        });
    }
    async getMessage(uid) {
        const message = await infra_1.MessageEntity.findOne(uid);
        if (!message)
            return undefined;
        return {
            uid: message.uid,
            title: message.title,
            message: message.message,
            created_at: message.createdAt,
            updated_at: message.updatedAt,
        };
    }
    async create(params) {
        const { title, message } = params;
        const createdMessage = await infra_1.MessageEntity.create({
            title,
            message,
        }).save();
        return Object.assign({}, params, createdMessage);
    }
    async update(id, params) {
        const { title, message } = params;
        const result = await infra_1.MessageEntity.update(id, {
            title,
            message,
        });
        return Object.assign({}, params, result);
    }
    async delete(id) {
        return await infra_1.MessageEntity.delete(id);
    }
}
exports.default = MessageRepository;
