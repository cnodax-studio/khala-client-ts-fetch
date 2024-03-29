"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Khalad API
 * This is open source Khala server implementation.
 *
 * The version of the OpenAPI document: 0.1.0-alpha.1
 * Contact: info@cnodax.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class MiscApi extends runtime.BaseAPI {
    /**
     * Show server hello message
     */
    rootGetRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.Get200ResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Show server hello message
     */
    rootGet(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.rootGetRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * Show Swagger UI
     */
    swaggerGetRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/swagger`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            if (this.isJsonMime(response.headers.get('content-type'))) {
                return new runtime.JSONApiResponse(response);
            }
            else {
                return new runtime.TextApiResponse(response);
            }
        });
    }
    /**
     * Show Swagger UI
     */
    swaggerGet(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.swaggerGetRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * Show server version
     */
    versionGetRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/version`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.VersionGet200ResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Show server version
     */
    versionGet(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.versionGetRaw(initOverrides);
            return yield response.value();
        });
    }
}
exports.MiscApi = MiscApi;
