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
 * @interface ApiV1PushWebSubscribePostRequest
 */
export interface ApiV1PushWebSubscribePostRequest {
    /**
     * 
     * @type {string}
     * @memberof ApiV1PushWebSubscribePostRequest
     */
    token?: string;
}

/**
 * Check if a given object implements the ApiV1PushWebSubscribePostRequest interface.
 */
export function instanceOfApiV1PushWebSubscribePostRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApiV1PushWebSubscribePostRequestFromJSON(json: any): ApiV1PushWebSubscribePostRequest {
    return ApiV1PushWebSubscribePostRequestFromJSONTyped(json, false);
}

export function ApiV1PushWebSubscribePostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV1PushWebSubscribePostRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'token': !exists(json, 'token') ? undefined : json['token'],
    };
}

export function ApiV1PushWebSubscribePostRequestToJSON(value?: ApiV1PushWebSubscribePostRequest | null): any {
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
