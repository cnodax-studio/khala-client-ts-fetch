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
exports.ApiV1PushWebGet200ResponseToJSON = exports.ApiV1PushWebGet200ResponseFromJSONTyped = exports.ApiV1PushWebGet200ResponseFromJSON = exports.instanceOfApiV1PushWebGet200Response = void 0;
const runtime_1 = require("../runtime");
const AuthPushSubscription_1 = require("./AuthPushSubscription");
/**
 * Check if a given object implements the ApiV1PushWebGet200Response interface.
 */
function instanceOfApiV1PushWebGet200Response(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfApiV1PushWebGet200Response = instanceOfApiV1PushWebGet200Response;
function ApiV1PushWebGet200ResponseFromJSON(json) {
    return ApiV1PushWebGet200ResponseFromJSONTyped(json, false);
}
exports.ApiV1PushWebGet200ResponseFromJSON = ApiV1PushWebGet200ResponseFromJSON;
function ApiV1PushWebGet200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': !(0, runtime_1.exists)(json, 'data') ? undefined : (json['data'].map(AuthPushSubscription_1.AuthPushSubscriptionFromJSON)),
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : json['status'],
    };
}
exports.ApiV1PushWebGet200ResponseFromJSONTyped = ApiV1PushWebGet200ResponseFromJSONTyped;
function ApiV1PushWebGet200ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': value.data === undefined ? undefined : (value.data.map(AuthPushSubscription_1.AuthPushSubscriptionToJSON)),
        'status': value.status,
    };
}
exports.ApiV1PushWebGet200ResponseToJSON = ApiV1PushWebGet200ResponseToJSON;