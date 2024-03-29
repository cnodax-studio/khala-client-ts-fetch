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
import type { MessageMessage } from './MessageMessage';
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
     * @type {string}
     * @memberof ApiV1ChatsChatIdMessagesPost200Response
     */
    status?: string;
}
/**
 * Check if a given object implements the ApiV1ChatsChatIdMessagesPost200Response interface.
 */
export declare function instanceOfApiV1ChatsChatIdMessagesPost200Response(value: object): boolean;
export declare function ApiV1ChatsChatIdMessagesPost200ResponseFromJSON(json: any): ApiV1ChatsChatIdMessagesPost200Response;
export declare function ApiV1ChatsChatIdMessagesPost200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV1ChatsChatIdMessagesPost200Response;
export declare function ApiV1ChatsChatIdMessagesPost200ResponseToJSON(value?: ApiV1ChatsChatIdMessagesPost200Response | null): any;
