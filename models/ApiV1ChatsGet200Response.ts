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
import type { ChatChat } from './ChatChat';
import {
    ChatChatFromJSON,
    ChatChatFromJSONTyped,
    ChatChatToJSON,
} from './ChatChat';

/**
 * 
 * @export
 * @interface ApiV1ChatsGet200Response
 */
export interface ApiV1ChatsGet200Response {
    /**
     * 
     * @type {Array<ChatChat>}
     * @memberof ApiV1ChatsGet200Response
     */
    data?: Array<ChatChat>;
    /**
     * 
     * @type {string}
     * @memberof ApiV1ChatsGet200Response
     */
    status?: string;
}

/**
 * Check if a given object implements the ApiV1ChatsGet200Response interface.
 */
export function instanceOfApiV1ChatsGet200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApiV1ChatsGet200ResponseFromJSON(json: any): ApiV1ChatsGet200Response {
    return ApiV1ChatsGet200ResponseFromJSONTyped(json, false);
}

export function ApiV1ChatsGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV1ChatsGet200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(ChatChatFromJSON)),
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function ApiV1ChatsGet200ResponseToJSON(value?: ApiV1ChatsGet200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(ChatChatToJSON)),
        'status': value.status,
    };
}

