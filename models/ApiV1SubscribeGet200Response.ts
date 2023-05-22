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
import type { ApiV1SubscribeGet200ResponseEventsInner } from './ApiV1SubscribeGet200ResponseEventsInner';
import {
    ApiV1SubscribeGet200ResponseEventsInnerFromJSON,
    ApiV1SubscribeGet200ResponseEventsInnerFromJSONTyped,
    ApiV1SubscribeGet200ResponseEventsInnerToJSON,
} from './ApiV1SubscribeGet200ResponseEventsInner';

/**
 * 
 * @export
 * @interface ApiV1SubscribeGet200Response
 */
export interface ApiV1SubscribeGet200Response {
    /**
     * 
     * @type {Array<ApiV1SubscribeGet200ResponseEventsInner>}
     * @memberof ApiV1SubscribeGet200Response
     */
    events?: Array<ApiV1SubscribeGet200ResponseEventsInner>;
    /**
     * 
     * @type {object}
     * @memberof ApiV1SubscribeGet200Response
     */
    fiberMap?: object;
}

/**
 * Check if a given object implements the ApiV1SubscribeGet200Response interface.
 */
export function instanceOfApiV1SubscribeGet200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApiV1SubscribeGet200ResponseFromJSON(json: any): ApiV1SubscribeGet200Response {
    return ApiV1SubscribeGet200ResponseFromJSONTyped(json, false);
}

export function ApiV1SubscribeGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV1SubscribeGet200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'events': !exists(json, 'events') ? undefined : ((json['events'] as Array<any>).map(ApiV1SubscribeGet200ResponseEventsInnerFromJSON)),
        'fiberMap': !exists(json, 'fiber.Map') ? undefined : json['fiber.Map'],
    };
}

export function ApiV1SubscribeGet200ResponseToJSON(value?: ApiV1SubscribeGet200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'events': value.events === undefined ? undefined : ((value.events as Array<any>).map(ApiV1SubscribeGet200ResponseEventsInnerToJSON)),
        'fiber.Map': value.fiberMap,
    };
}

