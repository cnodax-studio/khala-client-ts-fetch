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
import type { AuthSession } from './AuthSession';
import {
    AuthSessionFromJSON,
    AuthSessionFromJSONTyped,
    AuthSessionToJSON,
} from './AuthSession';

/**
 * 
 * @export
 * @interface ApiV1SessionsCurrentGet200Response
 */
export interface ApiV1SessionsCurrentGet200Response {
    /**
     * 
     * @type {AuthSession}
     * @memberof ApiV1SessionsCurrentGet200Response
     */
    data?: AuthSession;
    /**
     * 
     * @type {string}
     * @memberof ApiV1SessionsCurrentGet200Response
     */
    status?: string;
}

/**
 * Check if a given object implements the ApiV1SessionsCurrentGet200Response interface.
 */
export function instanceOfApiV1SessionsCurrentGet200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApiV1SessionsCurrentGet200ResponseFromJSON(json: any): ApiV1SessionsCurrentGet200Response {
    return ApiV1SessionsCurrentGet200ResponseFromJSONTyped(json, false);
}

export function ApiV1SessionsCurrentGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV1SessionsCurrentGet200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : AuthSessionFromJSON(json['data']),
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function ApiV1SessionsCurrentGet200ResponseToJSON(value?: ApiV1SessionsCurrentGet200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AuthSessionToJSON(value.data),
        'status': value.status,
    };
}

