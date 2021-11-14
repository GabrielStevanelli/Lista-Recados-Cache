"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewareAdapter = void 0;
const middlewareAdapter = (middleware) => {
    return async (req, res, next) => {
        const request = {
            headers: req.headers,
            body: req.body,
        };
        const httpResponse = await middleware.handle(request);
        if (httpResponse.statusCode === 200) {
            Object.assign(req, httpResponse.body);
            next();
        }
        else {
            res.status(httpResponse.statusCode).json({
                error: httpResponse.body.message,
            });
        }
    };
};
exports.middlewareAdapter = middlewareAdapter;
