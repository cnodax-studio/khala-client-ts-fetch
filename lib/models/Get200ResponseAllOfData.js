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
exports.Get200ResponseAllOfDataToJSON = exports.Get200ResponseAllOfDataFromJSONTyped = exports.Get200ResponseAllOfDataFromJSON = exports.instanceOfGet200ResponseAllOfData = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the Get200ResponseAllOfData interface.
 */
function instanceOfGet200ResponseAllOfData(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfGet200ResponseAllOfData = instanceOfGet200ResponseAllOfData;
function Get200ResponseAllOfDataFromJSON(json) {
    return Get200ResponseAllOfDataFromJSONTyped(json, false);
}
exports.Get200ResponseAllOfDataFromJSON = Get200ResponseAllOfDataFromJSON;
function Get200ResponseAllOfDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'message': !(0, runtime_1.exists)(json, 'message') ? undefined : json['message'],
    };
}
exports.Get200ResponseAllOfDataFromJSONTyped = Get200ResponseAllOfDataFromJSONTyped;
function Get200ResponseAllOfDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'message': value.message,
    };
}
exports.Get200ResponseAllOfDataToJSON = Get200ResponseAllOfDataToJSON;
