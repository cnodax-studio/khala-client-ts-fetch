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
import type { ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfData } from './ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfData';
import {
    ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfDataFromJSON,
    ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfDataFromJSONTyped,
    ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfDataToJSON,
} from './ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfData';

/**
 * 
 * @export
 * @interface ApiV1SubscribeGet200ResponseAllOfEventsInner
 */
export interface ApiV1SubscribeGet200ResponseAllOfEventsInner {
    /**
     * 
     * @type {string}
     * @memberof ApiV1SubscribeGet200ResponseAllOfEventsInner
     */
    category?: string;
    /**
     * 
     * @type {ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfData}
     * @memberof ApiV1SubscribeGet200ResponseAllOfEventsInner
     */
    data?: ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfData;
    /**
     * 
     * @type {number}
     * @memberof ApiV1SubscribeGet200ResponseAllOfEventsInner
     */
    timestamp?: number;
}

/**
 * Check if a given object implements the ApiV1SubscribeGet200ResponseAllOfEventsInner interface.
 */
export function instanceOfApiV1SubscribeGet200ResponseAllOfEventsInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApiV1SubscribeGet200ResponseAllOfEventsInnerFromJSON(json: any): ApiV1SubscribeGet200ResponseAllOfEventsInner {
    return ApiV1SubscribeGet200ResponseAllOfEventsInnerFromJSONTyped(json, false);
}

export function ApiV1SubscribeGet200ResponseAllOfEventsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV1SubscribeGet200ResponseAllOfEventsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'category': !exists(json, 'category') ? undefined : json['category'],
        'data': !exists(json, 'data') ? undefined : ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfDataFromJSON(json['data']),
        'timestamp': !exists(json, 'timestamp') ? undefined : json['timestamp'],
    };
}

export function ApiV1SubscribeGet200ResponseAllOfEventsInnerToJSON(value?: ApiV1SubscribeGet200ResponseAllOfEventsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'category': value.category,
        'data': ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfDataToJSON(value.data),
        'timestamp': value.timestamp,
    };
}
