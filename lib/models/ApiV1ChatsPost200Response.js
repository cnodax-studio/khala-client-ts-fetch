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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiV1ChatsPost200ResponseToJSON = exports.ApiV1ChatsPost200ResponseFromJSONTyped = exports.ApiV1ChatsPost200ResponseFromJSON = exports.instanceOfApiV1ChatsPost200Response = void 0;
const runtime_1 = require("../runtime");
const ChatChat_1 = require("./ChatChat");
/**
 * Check if a given object implements the ApiV1ChatsPost200Response interface.
 */
function instanceOfApiV1ChatsPost200Response(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfApiV1ChatsPost200Response = instanceOfApiV1ChatsPost200Response;
function ApiV1ChatsPost200ResponseFromJSON(json) {
    return ApiV1ChatsPost200ResponseFromJSONTyped(json, false);
}
exports.ApiV1ChatsPost200ResponseFromJSON = ApiV1ChatsPost200ResponseFromJSON;
function ApiV1ChatsPost200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': !(0, runtime_1.exists)(json, 'data') ? undefined : (0, ChatChat_1.ChatChatFromJSON)(json['data']),
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : json['status'],
    };
}
exports.ApiV1ChatsPost200ResponseFromJSONTyped = ApiV1ChatsPost200ResponseFromJSONTyped;
function ApiV1ChatsPost200ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, ChatChat_1.ChatChatToJSON)(value.data),
        'status': value.status,
    };
}
exports.ApiV1ChatsPost200ResponseToJSON = ApiV1ChatsPost200ResponseToJSON;
