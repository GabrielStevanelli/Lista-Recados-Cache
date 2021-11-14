"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingParamError = void 0;
class MissingParamError extends Error {
    constructor(paramName) {
        super(`Faltou o parametro: ${paramName}`);
        this.name = "MissingParamError";
    }
}
exports.MissingParamError = MissingParamError;
