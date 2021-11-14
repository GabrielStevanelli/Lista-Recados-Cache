"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = exports.ok = exports.notFound = exports.badRequest = void 0;
const errors_1 = require("../errors");
const badRequest = (error) => ({
    statusCode: 400,
    body: error,
});
exports.badRequest = badRequest;
const notFound = (error) => ({
    statusCode: 404,
    body: error,
});
exports.notFound = notFound;
const ok = (body) => ({
    statusCode: 200,
    body,
});
exports.ok = ok;
const serverError = () => ({
    statusCode: 500,
    body: new errors_1.ServerError(),
});
exports.serverError = serverError;
