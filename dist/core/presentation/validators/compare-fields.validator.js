"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CompareFieldsValidator_fieldName, _CompareFieldsValidator_fieldNameToCompare;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompareFieldsValidator = void 0;
const invalid_param_error_1 = require("../errors/invalid-param.error");
class CompareFieldsValidator {
    constructor(fieldName, fieldNameToCompare) {
        _CompareFieldsValidator_fieldName.set(this, void 0);
        _CompareFieldsValidator_fieldNameToCompare.set(this, void 0);
        __classPrivateFieldSet(this, _CompareFieldsValidator_fieldName, fieldName, "f");
        __classPrivateFieldSet(this, _CompareFieldsValidator_fieldNameToCompare, fieldNameToCompare, "f");
    }
    validate(input) {
        if (input[__classPrivateFieldGet(this, _CompareFieldsValidator_fieldName, "f")] !== input[__classPrivateFieldGet(this, _CompareFieldsValidator_fieldNameToCompare, "f")]) {
            return new invalid_param_error_1.InvalidParamError(__classPrivateFieldGet(this, _CompareFieldsValidator_fieldNameToCompare, "f"));
        }
    }
}
exports.CompareFieldsValidator = CompareFieldsValidator;
_CompareFieldsValidator_fieldName = new WeakMap(), _CompareFieldsValidator_fieldNameToCompare = new WeakMap();
