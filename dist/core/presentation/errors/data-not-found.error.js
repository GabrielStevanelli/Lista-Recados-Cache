"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataNotFoundError = void 0;
class DataNotFoundError extends Error {
    constructor() {
        super("No data found");
        this.name = "DataNotFoundError";
    }
}
exports.DataNotFoundError = DataNotFoundError;
