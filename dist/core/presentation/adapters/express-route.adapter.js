"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerMvcAdapter = exports.routeAdapter = void 0;
const __1 = require("..");
const routeAdapter = (controller) => {
    return async (req, res) => {
        const httpRequest = {
            body: req.body,
            params: req.params,
        };
        const httpResponse = await controller.handle(httpRequest);
        if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
            res.status(httpResponse.statusCode).json(httpResponse.body);
        }
        else {
            res.status(httpResponse.statusCode).json({
                error: httpResponse.body.message,
            });
        }
    };
};
exports.routeAdapter = routeAdapter;
const routerMvcAdapter = (controller, type) => {
    return async (req, res) => {
        const httpRequest = {
            body: req.body,
            params: req.params,
        };
        let httpResponse;
        switch (type) {
            case __1.EMvc.STORE:
                httpResponse = await controller.store(httpRequest);
                break;
            case __1.EMvc.SHOW:
                httpResponse = await controller.show(httpRequest);
                break;
            case __1.EMvc.INDEX:
                httpResponse = await controller.index(httpRequest);
                break;
            case __1.EMvc.UPDATE:
                httpResponse = await controller.update(httpRequest);
                break;
            case __1.EMvc.DELETE:
                httpResponse = await controller.delete(httpRequest);
                break;
        }
        if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
            res.status(httpResponse.statusCode).json(httpResponse.body);
        }
        else {
            res.status(httpResponse.statusCode).json({
                error: httpResponse.body.message,
            });
        }
    };
};
exports.routerMvcAdapter = routerMvcAdapter;
