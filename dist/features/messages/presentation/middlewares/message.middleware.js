"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageMiddleware = void 0;
const presentation_1 = require("../../../../core/presentation");
class MessageMiddleware {
    async handle(req) {
        const { body } = req;
        for (const field of ["title", "message"]) {
            const error = new presentation_1.RequireFieldsValidator(field).validate(body);
            if (error) {
                return (0, presentation_1.badRequest)(error);
            }
        }
        return (0, presentation_1.ok)({});
    }
}
exports.MessageMiddleware = MessageMiddleware;
