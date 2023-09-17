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
import type { MessageMessage } from './MessageMessage';
import {
    MessageMessageFromJSON,
    MessageMessageFromJSONTyped,
    MessageMessageToJSON,
} from './MessageMessage';

/**
 * 
 * @export
 * @interface ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfData
 */
export interface ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfData {
    /**
     * 
     * @type {MessageMessage}
     * @memberof ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfData
     */
    message?: MessageMessage;
}

/**
 * Check if a given object implements the ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfData interface.
 */
export function instanceOfApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfDataFromJSON(json: any): ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfData {
    return ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfDataFromJSONTyped(json, false);
}

export function ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : MessageMessageFromJSON(json['message']),
    };
}

export function ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfDataToJSON(value?: ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': MessageMessageToJSON(value.message),
    };
}

