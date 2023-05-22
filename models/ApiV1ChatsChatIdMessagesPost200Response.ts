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
 * @interface ApiV1ChatsChatIdMessagesPost200Response
 */
export interface ApiV1ChatsChatIdMessagesPost200Response {
    /**
     * 
     * @type {MessageMessage}
     * @memberof ApiV1ChatsChatIdMessagesPost200Response
     */
    data?: MessageMessage;
    /**
     * 
     * @type {object}
     * @memberof ApiV1ChatsChatIdMessagesPost200Response
     */
    fiberMap?: object;
    /**
     * 
     * @type {string}
     * @memberof ApiV1ChatsChatIdMessagesPost200Response
     */
    status?: string;
}

/**
 * Check if a given object implements the ApiV1ChatsChatIdMessagesPost200Response interface.
 */
export function instanceOfApiV1ChatsChatIdMessagesPost200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApiV1ChatsChatIdMessagesPost200ResponseFromJSON(json: any): ApiV1ChatsChatIdMessagesPost200Response {
    return ApiV1ChatsChatIdMessagesPost200ResponseFromJSONTyped(json, false);
}

export function ApiV1ChatsChatIdMessagesPost200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV1ChatsChatIdMessagesPost200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : MessageMessageFromJSON(json['data']),
        'fiberMap': !exists(json, 'fiber.Map') ? undefined : json['fiber.Map'],
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function ApiV1ChatsChatIdMessagesPost200ResponseToJSON(value?: ApiV1ChatsChatIdMessagesPost200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': MessageMessageToJSON(value.data),
        'fiber.Map': value.fiberMap,
        'status': value.status,
    };
}

