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
exports.ChatApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class ChatApi extends runtime.BaseAPI {
    /**
     * Get specific existing chat where user is member
     */
    apiV1ChatsChatIdGetRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.chatId === null || requestParameters.chatId === undefined) {
                throw new runtime.RequiredError('chatId', 'Required parameter requestParameters.chatId was null or undefined when calling apiV1ChatsChatIdGet.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/api/v1/chats/{chat_id}`.replace(`{${"chat_id"}}`, encodeURIComponent(String(requestParameters.chatId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ApiV1ChatsPost200ResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Get specific existing chat where user is member
     */
    apiV1ChatsChatIdGet(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiV1ChatsChatIdGetRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Invite user in specific chat
     */
    apiV1ChatsChatIdInvitePostRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.chatId === null || requestParameters.chatId === undefined) {
                throw new runtime.RequiredError('chatId', 'Required parameter requestParameters.chatId was null or undefined when calling apiV1ChatsChatIdInvitePost.');
            }
            if (requestParameters.payload === null || requestParameters.payload === undefined) {
                throw new runtime.RequiredError('payload', 'Required parameter requestParameters.payload was null or undefined when calling apiV1ChatsChatIdInvitePost.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/api/v1/chats/{chat_id}/invite`.replace(`{${"chat_id"}}`, encodeURIComponent(String(requestParameters.chatId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.ApiV1ChatsChatIdInvitePostRequestToJSON)(requestParameters.payload),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ApiV1ChatsChatIdInvitePost200ResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Invite user in specific chat
     */
    apiV1ChatsChatIdInvitePost(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiV1ChatsChatIdInvitePostRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * List existing chat where user is member
     */
    apiV1ChatsGetRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/api/v1/chats`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ApiV1ChatsGet200ResponseFromJSON)(jsonValue));
        });
    }
    /**
     * List existing chat where user is member
     */
    apiV1ChatsGet(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiV1ChatsGetRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * Create new chat
     */
    apiV1ChatsPostRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.payload === null || requestParameters.payload === undefined) {
                throw new runtime.RequiredError('payload', 'Required parameter requestParameters.payload was null or undefined when calling apiV1ChatsPost.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
            }
            const response = yield this.request({
                path: `/api/v1/chats`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.ApiV1ChatsPostRequestToJSON)(requestParameters.payload),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ApiV1ChatsPost200ResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Create new chat
     */
    apiV1ChatsPost(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiV1ChatsPostRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.ChatApi = ChatApi;
