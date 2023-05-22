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
import type { AuthUser } from './AuthUser';
import {
    AuthUserFromJSON,
    AuthUserFromJSONTyped,
    AuthUserToJSON,
} from './AuthUser';
import type { ChatChat } from './ChatChat';
import {
    ChatChatFromJSON,
    ChatChatFromJSONTyped,
    ChatChatToJSON,
} from './ChatChat';

/**
 * 
 * @export
 * @interface MessageMessage
 */
export interface MessageMessage {
    /**
     * 
     * @type {ChatChat}
     * @memberof MessageMessage
     */
    chat?: ChatChat;
    /**
     * 
     * @type {string}
     * @memberof MessageMessage
     */
    compressAlgorithm?: MessageMessageCompressAlgorithmEnum;
    /**
     * 
     * @type {string}
     * @memberof MessageMessage
     */
    cryptAlgorithm?: MessageMessageCryptAlgorithmEnum;
    /**
     * 
     * @type {string}
     * @memberof MessageMessage
     */
    date?: string;
    /**
     * 
     * @type {string}
     * @memberof MessageMessage
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof MessageMessage
     */
    mime?: string;
    /**
     * 
     * @type {string}
     * @memberof MessageMessage
     */
    text?: string;
    /**
     * 
     * @type {AuthUser}
     * @memberof MessageMessage
     */
    user?: AuthUser;
}


/**
 * @export
 */
export const MessageMessageCompressAlgorithmEnum = {
    None: 'none',
    ZlibDeflate: 'zlib-deflate'
} as const;
export type MessageMessageCompressAlgorithmEnum = typeof MessageMessageCompressAlgorithmEnum[keyof typeof MessageMessageCompressAlgorithmEnum];

/**
 * @export
 */
export const MessageMessageCryptAlgorithmEnum = {
    None: 'none',
    Aes256Cbc: 'aes-256-cbc'
} as const;
export type MessageMessageCryptAlgorithmEnum = typeof MessageMessageCryptAlgorithmEnum[keyof typeof MessageMessageCryptAlgorithmEnum];


/**
 * Check if a given object implements the MessageMessage interface.
 */
export function instanceOfMessageMessage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MessageMessageFromJSON(json: any): MessageMessage {
    return MessageMessageFromJSONTyped(json, false);
}

export function MessageMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chat': !exists(json, 'chat') ? undefined : ChatChatFromJSON(json['chat']),
        'compressAlgorithm': !exists(json, 'compress_algorithm') ? undefined : json['compress_algorithm'],
        'cryptAlgorithm': !exists(json, 'crypt_algorithm') ? undefined : json['crypt_algorithm'],
        'date': !exists(json, 'date') ? undefined : json['date'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'mime': !exists(json, 'mime') ? undefined : json['mime'],
        'text': !exists(json, 'text') ? undefined : json['text'],
        'user': !exists(json, 'user') ? undefined : AuthUserFromJSON(json['user']),
    };
}

export function MessageMessageToJSON(value?: MessageMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chat': ChatChatToJSON(value.chat),
        'compress_algorithm': value.compressAlgorithm,
        'crypt_algorithm': value.cryptAlgorithm,
        'date': value.date,
        'id': value.id,
        'mime': value.mime,
        'text': value.text,
        'user': AuthUserToJSON(value.user),
    };
}

