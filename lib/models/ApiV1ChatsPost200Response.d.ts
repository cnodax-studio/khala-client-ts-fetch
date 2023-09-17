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
import type { ChatChat } from './ChatChat';
/**
 *
 * @export
 * @interface ApiV1ChatsPost200Response
 */
export interface ApiV1ChatsPost200Response {
    /**
     *
     * @type {ChatChat}
     * @memberof ApiV1ChatsPost200Response
     */
    data?: ChatChat;
    /**
     *
     * @type {string}
     * @memberof ApiV1ChatsPost200Response
     */
    status?: string;
}
/**
 * Check if a given object implements the ApiV1ChatsPost200Response interface.
 */
export declare function instanceOfApiV1ChatsPost200Response(value: object): boolean;
export declare function ApiV1ChatsPost200ResponseFromJSON(json: any): ApiV1ChatsPost200Response;
export declare function ApiV1ChatsPost200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV1ChatsPost200Response;
export declare function ApiV1ChatsPost200ResponseToJSON(value?: ApiV1ChatsPost200Response | null): any;
