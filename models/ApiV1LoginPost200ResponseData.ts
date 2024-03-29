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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ApiV1LoginPost200ResponseData
 */
export interface ApiV1LoginPost200ResponseData {
    /**
     * 
     * @type {string}
     * @memberof ApiV1LoginPost200ResponseData
     */
    token?: string;
}

/**
 * Check if a given object implements the ApiV1LoginPost200ResponseData interface.
 */
export function instanceOfApiV1LoginPost200ResponseData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApiV1LoginPost200ResponseDataFromJSON(json: any): ApiV1LoginPost200ResponseData {
    return ApiV1LoginPost200ResponseDataFromJSONTyped(json, false);
}

export function ApiV1LoginPost200ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV1LoginPost200ResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'token': !exists(json, 'token') ? undefined : json['token'],
    };
}

export function ApiV1LoginPost200ResponseDataToJSON(value?: ApiV1LoginPost200ResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'token': value.token,
    };
}

