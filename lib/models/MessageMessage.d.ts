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
import type { AuthUser } from './AuthUser';
import type { ChatChat } from './ChatChat';
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
export declare const MessageMessageCompressAlgorithmEnum: {
    readonly None: "none";
    readonly ZlibDeflate: "zlib-deflate";
};
export type MessageMessageCompressAlgorithmEnum = typeof MessageMessageCompressAlgorithmEnum[keyof typeof MessageMessageCompressAlgorithmEnum];
/**
 * @export
 */
export declare const MessageMessageCryptAlgorithmEnum: {
    readonly None: "none";
    readonly Aes256Cbc: "aes-256-cbc";
};
export type MessageMessageCryptAlgorithmEnum = typeof MessageMessageCryptAlgorithmEnum[keyof typeof MessageMessageCryptAlgorithmEnum];
/**
 * Check if a given object implements the MessageMessage interface.
 */
export declare function instanceOfMessageMessage(value: object): boolean;
export declare function MessageMessageFromJSON(json: any): MessageMessage;
export declare function MessageMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageMessage;
export declare function MessageMessageToJSON(value?: MessageMessage | null): any;
